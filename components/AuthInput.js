import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import constants from "../Constants";

const Container = styled.View`
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
  width: ${constants.width / 1.7};
  padding: 10px;
  background-color: ${props => props.theme.greyColor};
  border: 0.5px solid ${props => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
    placeholder,
    value,
    keyboardType = "default",
    autoCapitalize = "none",
    returnKeyType = "done",
    onChange,
    onSubmitEditing = () => null,
    autoCorrect = true,
    autoFocus = true
}) => (
    <Container>
        <TextInput
            onChangeText={onChange}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            onSubmitEditing={onSubmitEditing}
            autoCorrect={autoCorrect}
            value={value}
            autoFocus={autoFocus}
        />
    </Container>
);

AuthInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keyboardType: PropTypes.oneOf([
        "default",
        "number-pad",
        "decimal-pad",
        "numeric",
        "email-address",
        "phone-pad"
    ]),
    autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
    onChange: PropTypes.func.isRequired,
    returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
    onEndEditing: PropTypes.func,
    autoCorrect: PropTypes.bool,
    autoFocus:PropTypes.bool
};

export default AuthInput;