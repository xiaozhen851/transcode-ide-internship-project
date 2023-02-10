import styled from 'styled-components'
const Wrapper = styled.article`
.container{
    width: 700px;
    height: 500px;
    margin: 5px;
    margin-left: -25px;
}
.header {
    background: #57a958;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 4px;
    font-family: sans-serif;
}

.control-panel {
    background: lightgray;
    text-align: right;
    padding: 4px;
    font-family: sans-serif;
}

.languages {
    background: white;
    border: 1px solid gray;
}

#editor { height: 400px; }

.button-container {
    text-align: right;
    padding: 4px;
}

.btn-primary {
    background: #57a958;
    color: white;
    padding: 8px;
    border: 0;   
}

.output {
        padding: 4px;
        border: 2px solid gray;
        min-height: 100px;
        width: 99%;
        resize: none;

}
.card{
    margin: 10px;
    margin-bottom: 50px;
}


`

export default Wrapper
