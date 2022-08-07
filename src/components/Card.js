import React from 'react'
import { Text } from 'react-native';
import { Card } from "@rneui/themed";
export default function Card2() {
  return (
    <>
    <Card>
    <Card.Title>CARD WITH DIVIDER</Card.Title>
    <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
    </Card>
    
    </>
    
  )
}
