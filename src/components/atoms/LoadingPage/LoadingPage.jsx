import React from 'react'
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

const ContainerLoading = styled.div`
      background-image: url(${props => props.backgroundimage});
      background-size:cover;
      height: 100vh;
      width: 100%;
      position: ${props => props.position};
      z-index:9999;
      div>.MuiCircularProgress-root{
        width: 50px !important;
        height:50px !important; 
      }
      `;

const ContainerSpinner = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(15px);
      height: 100%;
      width: 100%;
      `;

const LoadingPage = (props) => {
    return (
        <ContainerLoading backgroundimage={props.background} position={props.position}>
            <ContainerSpinner>
                <CircularProgress />
            </ContainerSpinner>
        </ContainerLoading>
    )
}

export default LoadingPage