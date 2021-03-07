import styled from "@emotion/styled";

const stylesCard = {
    default: {
        width: '140px',
        height: '140px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    favorites: {
        width: '300px',
        height: '56px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 12px'
    },
    follow: {
        width: '300px',
        height: '56px',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px'
    },
    repos: {
        width: '300px',
        height: 'max-content',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '4px',
        padding: '8px 12px'
    }
} 

const StyledCard = styled.div`
    display: flex;
    background: #FFFFFF;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: ${props => stylesCard[props.type].width};
    min-height: ${props => stylesCard[props.type].height};
    flex-direction: ${props => stylesCard[props.type].flexDirection};
    justify-content: ${props => stylesCard[props.type].justifyContent};
    align-items: ${props => stylesCard[props.type].alignItems};
    gap: ${props => stylesCard[props.type].gap};
    padding: ${props => stylesCard[props.type].padding};

    & .info-user {
        display: flex;
        align-items: center;
        gap: 8px;
    }
` 

function Card({type, children, onPress}) {
    return (
        <StyledCard onClick={onPress} type={type}>{children}</StyledCard>
    )
}

export default Card;