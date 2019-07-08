const bodyFontSize = 18;
const linkFontSize = 14;
const signupSuccessFontSize = 16;

const palette = {
    buttonTextContainer: {
        marginLeft: 56, // 146px
        marginRight: 56, // 146px
        marginTop: 32, // 100px (8dp grid please)
        marginBottom: 0
    },

    twoButtonLinks: {
        flexDirection: "row",
        marginTop: 8,
        padding: 1
    },

    fontSizes: {
        body: bodyFontSize,
        link: linkFontSize,
        signupSuccess: signupSuccessFontSize
    },

    fonts: {
        body: {
            fontSize: bodyFontSize,
            fontFamily: "Arial"
        }
    },

    dims: {
        borderRadius: 4, // 10px
    },

}

export default palette;