import styled from 'styled-components';

const StyledDatePickerContainer = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 20px;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const MonthName = styled.div`
`
const YearText = styled.div`
`
const NavigateButtons = styled.button`
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
const DayContainer = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 360px;
    display: flex;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: rgba(225,225,225,0.9);
    }
`
const SelectedDayContainer = styled.div`
`
const DisabledDayContainer = styled.div`
`
const TodayContainer = styled.div`
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