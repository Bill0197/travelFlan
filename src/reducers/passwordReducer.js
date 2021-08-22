export const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 7 }
	}

	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 7 }
	}

	return { value: '', isValid: false }
}
