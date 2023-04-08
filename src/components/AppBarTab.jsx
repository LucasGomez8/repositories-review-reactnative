import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Link, useLocation } from 'react-router-native'

export default function AppBarTab({children, to}) {
    const {pathname} = useLocation();
    const active = pathname === to;
    return (
        <Link to={to}> 
            <Text style={active ? styles.activetab : styles.tabtext}>{children}</Text>
        </Link>
    )
}

const styles = StyleSheet.create({
    tabtext: {
        color: '#777',
        fontWeight: 'bold',
        fontSize: 14,
        paddingHorizontal: 10
    },
    activetab:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        paddingHorizontal: 10
    }
})