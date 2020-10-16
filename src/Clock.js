import React from "react";
import styled from "styled-components"

class Clock extends React.Component {
  state = {
    date : new Date()
  };
  
  render() {
    const { date } = this.state;
    return (
      <Container>
        <CurData>
          {date.getFullYear()}&nbsp;/&nbsp;
          {date.getMonth() + 1}&nbsp;/&nbsp;
          {date.getDate()}
        </CurData>
        <CurDay>
        {date.getDay() === 0
            ? "일요일"
            : date.getDay() === 1
            ? "월요일"
            : date.getDay() === 2
            ? "화요일"
            : date.getDay() === 3
            ? "수요일"
            : date.getDay() === 4
            ? "목요일"
            : date.getDay() === 5
            ? "금요일"
            : "토요일"}
        </CurDay>
        <CurTime>
          {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
          &nbsp;:&nbsp;
          {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
        </CurTime>
      </Container>
    );
  }
  getDate = () => {
    this.setState({
      date: new Date()
    });
  };

  componentDidMount() {
    this.oneMinuteCall = setInterval(() => this.getDate(), 60000)
  }

  componentWillUnmount() {
    clearInterval(this.oneMinuteCall);
  }

}

const Container = styled.div`
  text-align:right;
  padding-right:40px;
  line-height:1;
`;
const CurData = styled.div`
  margin-top:40px;
  font-size:30px;
  letter-spacing:-1px;
`;
const CurDay = styled.div`
  font-size:40px;
  margin:20px 0 10px;
`;
const CurTime = styled.div`
  font-size:50px;
  font-weight:bold;
`;

export default Clock;
