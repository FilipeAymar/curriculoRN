import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Curriculo = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source = './img/FotoPefil.png'style={styles.profileImage}/>
        <Text style={styles.name}>Filipe Aymar</Text>
        <Text style={styles.title}>Developer and Analists Systems</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Padaria Globo</Text>
          <Text style={styles.itemDate}>Jan 2019 - Atual</Text>
          <Text style={styles.itemDescription}>Responsável por apoiar o gerente financeiro da empresa, cuidando de assuntos operacionais e burocráticos.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formações</Text>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Universidade Católica de Pernambuco - Unicap</Text>
          <Text style={styles.itemDate}>2018 - 2021</Text>
          <Text style={styles.itemDescription}>Administração de Empresas - Bacharelado</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Senac Pernambuco</Text>
          <Text style={styles.itemDate}>2023 - 2025</Text>
          <Text style={styles.itemDescription}>Analise e Desenvolvimento de Sistemas - Tecnologo</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text style={styles.skill}>JavaScript</Text>
        <Text style={styles.skill}>React Native</Text>
        <Text style={styles.skill}>Expo</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: 'gray',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 16,
    color: 'gray',
  },
  itemDescription: {
    fontSize: 16,
  },
  skill: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Curriculo;