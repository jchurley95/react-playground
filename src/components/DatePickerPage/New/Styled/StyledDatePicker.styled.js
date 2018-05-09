import styled from 'styled-components';

const StyledDatePickerContainer = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid gray;
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
`
const WeekContainer = styled.div`
`
const DayContainer = styled.div`
`
const DayNumber = styled.div`
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
    DayNumber
}