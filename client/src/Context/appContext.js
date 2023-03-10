import React, { useReducer, useContext } from 'react';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_ANSWER_BEGIN,
  GET_ANSWER_SUCCESS,
  GET_ANSWER_ERROR,
  // RUN_CODE_BEGIN,
  // RUN_CODE_SUCCESS,
  // RUN_CODE_ERROR
} from './action';
import reducer from './reducer';
import axios from 'axios';

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const university = localStorage.getItem('university')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  university: university,
  showSidebar : false,
  question: '',
  getEditorValue: null,
};

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState);
  //axios global setup
  axios.defaults.headers['Authorization'] = `Bearer ${state.token}`;

  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT,
    })
    clearAlert()
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      })
    }, 3000)
  };

  const addUserToLocalStorage = ({ user, token, university }) => {
    initialState.user = user;
    initialState.token = token;
    initialState.university = university;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('university', university);
  }

  const removeUserFromLocalStorage = () => {
    initialState.user = null;
    initialState.token = '';
    initialState.university = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('university');
  }

  const setUpUser = async ({currentUser, endpoint, alertText}) => {
    dispatch({ type: SETUP_USER_BEGIN})
    try {
      const { data } = await axios.post(`/api/version1/auth/${endpoint}`, currentUser)
      const { user, token, university } = data

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, university, alertText},
      })

      addUserToLocalStorage({ user, token, university })
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const toggleSidebar = ()=>{
    dispatch({type:TOGGLE_SIDEBAR})
  }

  const logOut = ()=>{
    dispatch({type:LOGOUT_USER})
    removeUserFromLocalStorage()
  }

  const updateUser = async (currentUser) => {
    dispatch({ type:UPDATE_USER_BEGIN })
    try {
      const { data } = await axios.patch('/api/version1/auth/updateUser', currentUser)
      const {user, token, university} = data
      dispatch({
        type:UPDATE_USER_SUCCESS,
        payload:{user,token,university}
      })
      addUserToLocalStorage({ user, token, university })
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type:UPDATE_USER_ERROR,
          payload:{msg: error.response.data.msg}
        });
      } else {
        removeUserFromLocalStorage();
        window.location = '/register';
      }
    }
    clearAlert()
  }

  const getAnswer = async(question) =>{
    dispatch({type : GET_ANSWER_BEGIN})
    try {
      dispatch({
        type:GET_ANSWER_SUCCESS,
      })
      return axios.get("/api/version1/code/answer/?question=" + question).then((response) => {
        // console.log(response)
        if (response.status == 200){
          return response.data
        }
        throw response.data
      });
    } catch (error) {
      dispatch({
        type:GET_ANSWER_ERROR,
        payload:{msg: error.response.data.msg}
      })
      if (error.response.status == 401) {
        removeUserFromLocalStorage();
        window.location = '/register';
      }
    }
  }

  const runCode = async (runParameters) => {
    const config = {
      headers: {
        'Content-Type': 'application/json; charset-utf-8',
      },
    };
    try {
      const response = await axios.post(
          '/api/version1/code/runs',
          runParameters,
          config
      );
      if (response.status == 200) {
        return response.data
      }
    } catch (error) {
      console.log(error);
      if (error.response.status == 401) {
        removeUserFromLocalStorage();
        window.location = '/register';
      }
    }
  };

  const getQuestionList = async () => {
    try {
      const { data } = await axios.get('/api/version1/problem/list');
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const getQuestionDesc = async (id) => {
    try {
      const { data } = await axios.post('/api/version1/problem/desc', { id });
      return data;
    } catch (error) {
      console.error(error)
    }
  }

  const log = async (params) => {
    try {
      const { data } = await axios.post('/api/version1/log/create', params);
      return data;
    } catch (error) {
      console.error(error);
      if (error.response.status == 401) {
        removeUserFromLocalStorage();
        window.location = '/register';
      }
    }
  }

  const lastRecord = async (params) => {
    try {
      const { data } = await axios.post('/api/version1/log/lastRecord', params);
      return data;
    } catch (error) {
      console.error(error);
      if (error.response.status == 401) {
        removeUserFromLocalStorage();
        window.location = '/register';
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        setUpUser,
        toggleSidebar,
        logOut,
        updateUser,
        getAnswer,
        runCode,
        getQuestionList,
        getQuestionDesc,
        log,
        lastRecord,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext, initialState }
