// @flow

import { StyleSheet } from 'react-native'

import appStyle from './appStyle'

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: appStyle.colors.bgAlt
  },
  textDefault: {
    letterSpacing: -1,
    fontSize: 18,
    textAlign: 'center',
    color: appStyle.colors.text,
    fontFamily: 'Kalam-Bold'
  },
  safeArea: {
    backgroundColor: appStyle.colors.bg
  },
  mainPage: {
    backgroundColor: appStyle.colors.bg,
    height: '100%'
  },
  videoPlaceholder: {
    backgroundColor: appStyle.colors.bgDark,
    alignSelf: 'stretch',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoPlaceholderText: {
    backgroundColor: 'transparent',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  baseMarkerStyle: {
    position: 'absolute',
    opacity: 1,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    transform: [{scale: 0}],
    borderRadius: 10
  },
  upMarker: {
    top: 5,
    left: '50%'
  },
  rightMarker: {
    top: '50%',
    right: 5
  },
  downMarker: {
    bottom: 100,
    left: '50%'
  },
  leftMarker: {
    top: '50%',
    left: 5
  },
  flipCard: {
    // backfaceVisibility: 'hidden',
    width: '90%',
    // backgroundColor: '#662d91',
    marginLeft: '5%'
  },
  flipCardContainer: {
    backgroundColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 4,
    shadowOpacity: 0.5,
    marginBottom: 18
  },
  flipCardBack: {
    position: 'absolute'
  },
  flipCardContent: {
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  summaryContainer: {
    height: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 0,
    padding: 5
  },
  summaryRow: {
    fontWeight: 'bold',
    fontSize: 12
  },
  summaryLeftRow: {
    textAlign: 'left',
    width: 100
  },
  summaryCenterRow: {
    textAlign: 'center',
    flex: 1
  },
  summaryRightRow: {
    textAlign: 'right',
    width: 100
  },
  menuOverlay: {
    top: appStyle.header.height,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 500
  },
  menuButton: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderColor: '#fff5'
  },
  menuButtonText: {
    color: '#999',
    fontSize: 14,
    fontFamily: 'Exo2-Bold'
  },
  header: {
    height: appStyle.header.height,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    margin: 0,
    paddingTop: 20,
    paddingBottom: 27,
    paddingHorizontal: 20,
    width: '100%'
  },
  headerWithShadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: 5
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    backgroundColor: 'white'
  },
  headerTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Exo2-Bold'
  },
  headerLogo: {
    padding: 0,
    marginLeft: -25,
    marginTop: 10,
    marginBottom: 0,
    flex: 1,
    transform: [
      { scale: 1.2 }
    ]
  },
  headerBorder: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionHeaderFluxContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  primaryHeader: {
    height: 24,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#662d91',
    fontSize: 12,
    padding: 5,
    textAlign: 'center'
  },
  flipCardHeader: {
    height: 24,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Exo2-Bold',
    padding: 5,
    backgroundColor: 'transparent'
  },
  flipCardBody: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardText: {
    color: 'black',
    backgroundColor: 'transparent',
    fontFamily: 'Kalam-Regular',
    fontSize: 16,
    padding: 10,
    textAlign: 'center'
  },
  cardImage: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    alignSelf: 'center'
  },
  form: {
    marginTop: 5,
    width: '70%'
  },
  errorText: {
    textAlign: 'center',
    padding: 5,
    color: 'white',
    backgroundColor: '#D00',
    marginVertical: 10
  },
  textInputWrapper: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 25
  },
  textInput: {
    height: 35,
    fontSize: 13,
    fontFamily: 'Exo2-Regular',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
    padding: 8
  },
  button: {
    fontSize: 14,
    backgroundColor: '#224c8c',
    color: '#FFF',
    padding: 15,
    textAlign: 'center',
    fontFamily: 'Exo2-Bold',
    borderRadius: 23,
    overflow: 'hidden'
  },
  progressBarContainer: {
    justifyContent: 'center',
    position: 'relative',
    width: '85%',
    height: 20,
    marginVertical: 15
  },
  progressBarTrack: {
    top: 3,
    position: 'relative',
    width: '100%',
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#0007'
  },
  progressBarProgressLine: {
    position: 'relative',
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#fff'
  },
  progressBarProgressCircle: {
    marginTop: -9,
    position: 'relative',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#fff'
  },
  answerEvaluator: {
    position: 'relative',
    backgroundColor: 'white',
    overflow: 'hidden',
    width: '100%',
    height: 200
  },
  answerTopLine: {
    position: 'absolute',
    alignSelf: 'center',
    top: '12%',
    width: 2,
    height: '24%',
    backgroundColor: '#71b9d3'
  },
  answerRightLine: {
    position: 'absolute',
    top: '50%',
    right: '12%',
    width: '26%',
    height: 2,
    backgroundColor: '#ff8533',
    transform: [{ translateY: -1 }]
  },
  answerBottomLine: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '11.6%',
    width: 2,
    height: '24%',
    backgroundColor: '#c1272d'
  },
  answerLeftLine: {
    position: 'absolute',
    top: '50%',
    left: '12%',
    width: '26%',
    height: 2,
    backgroundColor: '#62c46c',
    transform: [{ translateY: -1 }]
  },
  answerFieldTop: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71b9d3',
    width: 170,
    height: '16%',
    borderRadius: 35,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  answerFieldRight: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: [{ translateY: -85 }],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#62c46c',
    width: '12%',
    height: 170,
    borderRadius: 35,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  answerFieldBottom: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1272d',
    width: 170,
    height: '16%',
    borderRadius: 35,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  answerFieldLeft: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -85 }],
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8533',
    width: '12%',
    height: 170,
    borderRadius: 35,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  answerText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Kalam-Bold',
    textAlign: 'center',
    width: 100
  },
  answerCircle: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'white',
    top: '50%',
    transform: [{ translateY: -50 }],
    borderWidth: 2,
    borderColor: '#b3b3b3',
    width: 100,
    height: 100,
    borderRadius: 50
  },
  draggableContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'

  },
  answerSwipeBall: {
    alignSelf: 'center',
    backgroundColor: '#662d91',
    width: 70,
    height: 70,
    borderRadius: 35
  },
  answerEvaluatorOverlay: {
    position: 'absolute',
    backgroundColor: '#fffd',
    top: 0,
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    padding: '5%'
  },
  infoText: {
    textAlign: 'center',
    fontFamily: 'Exo2-Regular',
    fontSize: 17
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#b3b3b3',
    position: 'absolute',
    alignSelf: 'center'
  },
  triangleTop: {
    top: '34%'
  },
  triangleBottom: {
    borderBottomWidth: 0,
    borderTopWidth: 12,
    borderBottomColor: 'transparent',
    borderTopColor: '#b3b3b3',
    top: '60%'
  },
  triangleRight: {
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderRightWidth: 0,
    borderLeftWidth: 12,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: '#b3b3b3',
    top: '48.75%',
    left: '60%'
  },
  triangleLeft: {
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderRightWidth: 12,
    borderLeftWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: '#b3b3b3',
    borderLeftColor: 'transparent',
    top: '48.75%',
    left: '38%'
  }
})

export default styles
