import styled ,{css} from "styled-components";

const typeVariants={
    primary:css`
        color:${({theme})=>theme.grayDar};
    `,
    secondary:css`
        color:${({theme})=>theme.grayDar};
        opacity: 0.3;
    `,
    danger:css`
        color: ${({theme})=>theme.red};
    `
}
const sizeVariants={
    normal:css`
        color: ${({theme})=>theme.normal};
    `,
    medium:css`
        color: ${({theme})=>theme.medium};
    `,
    large:css`
        color: ${({theme})=>theme.large};
    `,
    xlarge:css`
        color: ${({theme})=>theme.xlarge};
    `,
    xxlarge:css`
        color: ${({theme})=>theme.xxlarge};
    `,
    small:css`
        color: ${({theme})=>theme.small};
    `,
    xsmall:css`
        color: ${({theme})=>theme.xsmall};
    `,
    xxsmall:css`
        color: ${({theme})=>theme.xxsmall};
    `,
}
const StyledText = styled.span`
    font-size: ${({size})=>sizeVariants[size]||sizeVariants.normal};
    ${({type})=>typeVariants[type]};
    ${({bold})=>bold&&`font-weight:500`};
`;

export default StyledText;
