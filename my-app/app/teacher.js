import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function TeacherDashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Teacher!</Text>

      <ScrollView style={{width:'100%'}}>
        <Text style={styles.sectionTitle}>Upload Events</Text>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Add New Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>View All Events</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.logout} onPress={() => router.replace('/')}>
        <Text style={{color:'#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#eef2f5' },
  title: { fontSize:26, fontWeight:'bold', marginBottom:20, textAlign:'center' },
  sectionTitle: { fontSize:20, fontWeight:'bold', marginBottom:10 },
  card: { backgroundColor:'#fff', padding:20, borderRadius:10, marginBottom:10, shadowColor:'#000', shadowOpacity:0.1, shadowRadius:10 },
  cardText: { fontSize:16 },
  logout: { backgroundColor:'#FF3B30', padding:15, borderRadius:10, alignItems:'center', marginTop:20 }
});
