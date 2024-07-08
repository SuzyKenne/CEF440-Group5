// src/components/Collapsible.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Collapsible: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <Text>{collapsed ? 'Show' : 'Hide'}</Text>
      </TouchableOpacity>
      {!collapsed && (
        <View>
          <Text>This is collapsible content</Text>
        </View>
      )}
    </View>
  );
};

export default Collapsible;


