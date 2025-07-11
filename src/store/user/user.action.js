import  USER_ACTION_TYPES  from "./user.types";

export const checkUserSession = ()=>{
    return {type: USER_ACTION_TYPES.CHECK_USER_SESSION};
}

export const signInSuccess = (user) =>{
    return { type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user };
}

export const signInFailed= (error) =>{
    return { type: USER_ACTION_TYPES.SIGN_IN_FAILED, payload: error};
}

export const googleSignInStart=()=>{
    return { type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START};
}

export const emailSignInStart=(email,password)=>{
    return {type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: {email, password}};
}

export const signUpStart = (email, password, displayName) =>{
  return { type:USER_ACTION_TYPES.SIGN_UP_START, payload: { email, password, displayName}};
}

export const signUpSuccess = (user, additionalDetails) =>{
  return { type: USER_ACTION_TYPES.SIGN_UP_SUCCESS, payload:{ user, additionalDetails }};
}

export const signUpFailed = (error) =>{
  return {type: USER_ACTION_TYPES.SIGN_UP_FAILED, payload: error};
}

export const signOutStart=()=>{
  return {type: USER_ACTION_TYPES.SIGN_OUT_START};
}

export const signOutSuccess=()=>{
  return{type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS};
}

export const signOutFailed=(error)=>{
  return {type: USER_ACTION_TYPES.SIGN_OUT_FAILED, payload: error};
}