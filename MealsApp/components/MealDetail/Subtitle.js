import {View, Text, StyleSheet} from 'react-native';
function Subtitle({children}) {
    return <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{children}</Text>
</View>
}
export default Subtitle;
const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    subTitleContainer: {
        margin: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomWidth: 2,

    }
})