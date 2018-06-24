/**
 * People compnent to login with name and birth year
 */
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { onLogin } from '../../actions/LoginActions';
import {
  CardSection,
  Input,
  Button,
  Spinner,
} from '../../components/common';
import { loginStyle } from './style'
import {
  NAME,
  USER_NAME,
  API_ERROR,
  ALERT_TITLE,
  OK,
  PASSWORD,
} from '../../value/strings';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '', error: '' };
  }

  isValid = () => {
    const { name, password } = this.state;
    if (name.length > 0 && password.length > 0) {
      return true;
    } else if (name.length === 0) {
      this.showError('Enter user name');
      return false;
    } else if (password.length === 0) {
      this.showError('Enter password');
      return false;
    }
  }

  onLoginPress = () => {
    if (this.isValid()) {
      const { name, password } = this.state;
      this.props.onLogin(name, password);
    }
  }
  showError = (error) => {
    return (Alert.alert(ALERT_TITLE, error,
      [{ text: OK, onPress: () => this.onPressOK(), style: 'cancel' }],
      { cancelable: false },
    ));
  }

  onPressOK = () => {
    console.log('onPressOK pressed');
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onLoginPress}>Login</Button>
    );
  }

  viewLogin = () => (
    <View>
      <CardSection>
        <Input
          label={''}
          placeholder={USER_NAME}
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          label={''}
          placeholder={PASSWORD}
          value={this.state.birth_year}
          onChangeText={text => this.setState({ password: text })}
        />
      </CardSection>

      <Text style={loginStyle.errorTextStyle}>
        {this.props.message}
      </Text>

      <CardSection>
        {this.renderButton()}
      </CardSection>
    </View>
  );

  viewUser = () => {
    const { first_name, last_name, mobile, office, about } = this.props.user;
    return (<View>
      <Text style={loginStyle.titleText}>
        {`${first_name} ${last_name}`}
      </Text>
      <Text style={loginStyle.baseText}>Mobile: {mobile}</Text>
      <Text style={loginStyle.baseText}>{office}</Text>
      <Text style={loginStyle.baseText}/>
      <Text style={loginStyle.baseText}>{about}</Text>
    </View>
    );
  }
  
  render() {
    return (
      <View style={loginStyle.containerStyle}>
        {this.props.isLogin ? this.viewUser() : this.viewLogin()}
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { user, message, loading, isLogin } = login;
  return { user, message, loading, isLogin };
};

export default connect(mapStateToProps, { onLogin })(Login);
