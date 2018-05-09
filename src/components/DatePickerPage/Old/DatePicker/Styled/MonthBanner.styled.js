import styled from 'styled-components';

const MonthBannerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const MonthName = styled.div`
    width; 40%;
    text-align: center;
`
const ChangeMonthButton = styled.button`
    &:hover {
        cursor: pointer;
    }
`
const NextMonth = ChangeMonthButton.extend`

`
const PreviousMonth = ChangeMonthButton.extend`

`

export {
    MonthBannerContainer,
    MonthName,
    NextMonth,
    PreviousMonth
}