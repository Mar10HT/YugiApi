import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Title, Text } from "react-native-paper";
import CardImage from '../CardImage'
import theme from '../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const DetailsCard = ({ route }) => {
    const { item } = route.params;

    const renderWithType = () => {
        if (item.type === "Spell Card" || item.type === "Trap Card") {
            return (
                <Card style={styles.card}>
                    <View style={styles.info}>
                        <Card.Title title="Card Information" titleStyle={styles.infotext}/>
                    </View>
                    <Card.Content>
                        <CardImage style={styles.image}
                            image={item.id}/>
                    </Card.Content>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.adcontainerinfo}>
                    <Text style={styles.icon}>Type:</Text>
                    <Text style={styles.icon}>Race:</Text>
                </View>
                <View style={styles.adcontainertype}>
                    <Text style={styles.attributes}>{item.type}</Text>
                    <Text style={{ marginRight: '10%' }}>{item.race}</Text>
                </View>
                <View style={styles.line}></View>
                    <Text style={{ marginLeft: '10%', marginTop: '3%' }}>Card Description:</Text>
                <View style={styles.descView}>
                    <Text style={styles.descText}>{item.desc}</Text>
                </View>
            </Card>
            )
        } else {
            return(
                <Card style={styles.card}>
            <View style={styles.info}>
                <Card.Title title="Card Information" titleStyle={styles.infotext}/>
            </View>
            <Card.Content>
                <CardImage style={styles.image}
                image={item.id}/>
            </Card.Content>
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.adcontainerinfo}>
                <MaterialCommunityIcons name="sword" size={24} color="black"  style={styles.icon}/>
                <FontAwesome5 name="shield-alt" size={24} color="black" style={styles.icon}/>
            </View>
            <View style={styles.adcontainer}> 
                <Text style={styles.icon}>{item.atk}</Text>
                <Text style={styles.icon}>{item.def}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.adcontainerinfo}>
                <Text style={styles.icon}>Type:</Text>
                <Text style={styles.icon}>Race:</Text>
                <Text style={styles.icon}>Attribute:</Text>
            </View>
            <View style={styles.adcontainertype}>
                <Text style={styles.attributes}>{item.type}</Text>
                <Text style={{ marginRight: '18%' }}>{item.race}</Text>
                <Text style={{ marginRight: '13%' }}>{item.attribute}</Text>
            </View>
            <View style={styles.line}></View>
            <Text style={{ marginLeft: '10%', marginTop: '3%' }}>Card Description:</Text>
            <View style={styles.descView}>
                <Text style={styles.descText}>{item.desc}</Text>
            </View>
            </Card>
            )
        }
    }
    
    return(
        <ScrollView>
            {renderWithType()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: '5%',
        marginHorizontal: '8%',
        height: 'auto',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: theme.colors.blue
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: '12%',
        marginBottom: '3%',
        marginLeft: '3%',
    },
    line: {
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: 1,
        marginHorizontal: '8%',
    },
    info: {
        backgroundColor: theme.colors.blue,
    },
    infotext: {
        marginLeft: '28%',
        color: theme.colors.white
    },
    adcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '3%'
    },
    adcontainerinfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3%'
    },
    adcontainertype: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '2%',
        marginBottom: '3%'
    },
    attributes: {
        marginHorizontal: '9%'
    },
    icon: {
        marginHorizontal: '9%'
    },
    descView: {
        margin: '5%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.gray
    },
    descText: {
        margin: '2%'
    }
});

export default DetailsCard;