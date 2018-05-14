import styled from 'styled-components';

const StyledDatePickerContainer = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #FFFFFF;
    // font-family: "Open Sans";
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const MonthName = styled.div`
    color: #444;
    font-weigth: 600px;
    font-size: 18px;
`
const YearText = styled.div`
`
const NavigateButtons = styled.button`
    background: #FFFFFF;
    border-radius: 2px;
`
const PreviousMonthButton = NavigateButtons.extend`
`
const NextMonthButton = NavigateButtons.extend`
`
const DaysOfTheWeekBannerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const DayOfTheWeek = styled.div`
`
const AllShownWeeksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
`
const WeekContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const DayBaseStyle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 360px;
    display: flex;
    justify-content: center;
`
const DayContainer = DayBaseStyle.extend`

    &:hover {
        cursor: pointer;
        background-color: rgba(225,225,225,0.9);
    }
`
const SelectedDayContainer = DayBaseStyle.extend`
    background: #F96302;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
    }
`
const DisabledDayContainer = DayBaseStyle.extend`
    color: gray;

`
const TodayContainer = DayBaseStyle.extend`
    border: 1px solid #F96302;
    color: #F96302;

    &:hover {
        cursor: pointer;
        background-color: rgba(225,225,225,0.9);
    }
`
const DayNumber = styled.div`
    align-self: center;
`


export {
    StyledDatePickerContainer,
    HeaderContainer,
    MonthName,
    YearText,
    PreviousMonthButton,
    NextMonthButton,
    DaysOfTheWeekBannerContainer,
    DayOfTheWeek,
    AllShownWeeksContainer,
    WeekContainer,
    DayContainer,
    SelectedDayContainer,
    DisabledDayContainer,
    TodayContainer,
    DayNumber
}