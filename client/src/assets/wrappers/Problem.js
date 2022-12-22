import styled from 'styled-components'
const Wrapper = styled.article`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
.h3 {
    margin-top: 0;
    font-size: larger;
}
.card-container{
    border: 3px solid #fff;
    padding: 20px;
}
.card{
    width: 50em;
    border: 2px solid var(--primary-400);
}
.btn {
    width: 100px;
    color : var(--primary-400);
    margin : 8px ;
    float: right;

}
`

export default Wrapper