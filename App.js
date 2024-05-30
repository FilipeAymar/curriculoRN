import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

  const App = () => {
  const [currentSection, setCurrentSection] = useState('Informações Pessoais');

  const renderSection = () => {
    switch (currentSection) {
      case 'Formação Acadêmica':
        return (
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formações Acadêmica</Text>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Analise e Desenvolvimento de Sistemas</Text>
            <Text>Faculdade Senac Pernambuco</Text>
            <Text>Cursando: 3° Periodo</Text>
            <Text>Ano da Conclusão: 2025.1</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Administração de Empresas</Text>
            <Text>Universidade Católica de Pernambuco</Text>
            <Text>Ano de Conclusão: 2022.1</Text>
          </View>
        </View>
        );
      case 'Experiência Profissional':
        return (
          <View style={styles.section}>

            <Text style={styles.sectionTitle}>Experiência Profissional TI</Text>
              <Text>Procurando de experiência na area</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experiência Profissional ADM</Text>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>Assistente Financeiro</Text>
              </View>
              <Text>Responsável por apoiar o gerente financeiro da empresa, cuidando de assuntos operacionais e burocráticos.</Text>
            </View>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>Unicap Bullmarket</Text>
              </View>
              <Text>Analista de Equity (5 meses)</Text>
              <Text>Responsável por fazer analise de DRE's de empresas listadas na Bolsa de Valores, identificando o nível de risco das empresas no setor em que elas se contram.</Text>
              <Text>Acessor Organizacional (5 meses)</Text>
              <Text>Responsável por gerenciar o fluxo de informações dentro e fora da Liga, desenvolvendo estratégias de comunicação para promove-la.</Text>
            
            </View>

        );
      case 'Habilidades':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Habilidades</Text>

            <Text style={styles.sectionTitleHabilidades}>Back-End</Text>
            <Text>- C - Intermediário</Text>
            <Text>- Python - Básico </Text>
            <Text>- MySQL - Avançado</Text>
            <Text>- MongoDB - Básico </Text>

            <Text style={styles.sectionTitleHabilidades}>Front-End</Text>
            <Text>- CSS - Intermediário </Text>
            <Text>- JavaScript - Básico </Text>
            <Text>- HTML - Intermediário </Text>

            <Text style={styles.sectionTitleHabilidades}>Línguas</Text>
            <Text>- Inglês - Intermediário</Text>
            <Text>- Espanhol - Tecnico</Text>

            <Text style={styles.sectionTitleHabilidades}>Outros</Text>
            <Text>- Pacote Office - intermediário </Text>

          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Currículo - Filipe Aymar</Text>
        <View style={styles.photoContainer}>
          <Image
            style={styles.photo}
            source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQEqcMHlFEcU2g/profile-displayphoto-shrink_800_800/0/1713548564557?e=1722470400&v=beta&t=TfyFikolKwTKoU8oN94nmu7CvpQWyPDx7Y4ioITq0n0' }}
          />

        </View>
        <View style={styles.sectionPessoal}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        <Text>Nome: Filipe Augusto Aymar Rebelo Bezerra</Text>
        <Text>Email: filipeaaymar@gmail.com</Text>
        <Text>Telefone: (81) 999994-5685</Text>
      </View>

      </View>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => setCurrentSection('Formação Acadêmica')} style={styles.button}>
          <Text style={styles.buttonText}>Formações Acadêmica</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentSection('Experiência Profissional')} style={styles.button}>
          <Text style={styles.buttonText}>Experiências Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentSection('Habilidades')} style={styles.button}>
          <Text style={styles.buttonText}>Habilidades</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {renderSection()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  photoContainer: {
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#000000',
  },
  buttonText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionPessoal: {
    marginBottom: 10,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitleHabilidades: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    padding: 10,
  },
  item: {
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
