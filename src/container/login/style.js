
import {
    PADDING_TOP,
    PADDING_LEFT,
    PADDING_BOTTOM,
    PADDING_RIGHT,
    PADDING_HEADER,
    SIZE_NORMAL,
    SIZE_LARGE,
} from '../../value/dimen';

export const loginStyle = {
    containerStyle: {
        flex: 1,
        paddingLeft: PADDING_LEFT,
        paddingTop: PADDING_HEADER,
        paddingBottom: PADDING_BOTTOM,
        paddingRight: PADDING_RIGHT,
    },
    baseText: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'Cochin',
        fontSize: SIZE_NORMAL,
        paddingLeft: 10,
        paddingRight: 10,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: SIZE_NORMAL,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
};