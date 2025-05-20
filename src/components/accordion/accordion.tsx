// Accordion.tsx
import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(prev => {
      const newState = !prev;
      height.value = withTiming(newState ? 1 : 0, { duration: 300 });
      opacity.value = withTiming(newState ? 1 : 0, { duration: 300 });
      return newState;
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    maxHeight: height.value ? undefined : 0,
    overflow: 'hidden',
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
       {
        open ? <FontAwesome6 name="angle-up" size={24} color="white" /> : <Entypo name="chevron-down" size={24} color="white" />
       }
      </TouchableOpacity>
      <Animated.View style={[animatedStyle, styles.content]}>
        {open && children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"90%",
    alignSelf:"center",
  },
  header: {
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#fff",
    flexDirection:"row",
    width:"100%"
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'PlusJakartaSans_700Regular',
    flex:1,
    color:"#fff",
    fontSize: 16,
  },
  content: {
    padding: 16,
    height:"auto"
  },
});
