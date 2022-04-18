import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const {{cookiecutter.component_name}}UI = styled.div`
    display: flex;
`;

{{cookiecutter.component_name}}UI.displayName = {{cookiecutter.component_name}}UI;

function {{cookiecutter.component_name}}({children}) {
   
        return (
            <{{cookiecutter.component_name}}UI>
                {children}
            </{{cookiecutter.component_name}}UI>
        );
    
}


// prop types
{{cookiecutter.component_name}}.propTypes = {
  children: PropTypes.string,
};


// default props
{{cookiecutter.component_name}}.defaultProps = {
    children : "",
};


export default {{cookiecutter.component_name}};
