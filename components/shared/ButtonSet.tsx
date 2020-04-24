import React from "react";
import { StyleSheet, View } from "react-native";
import * as R from "remeda";

import { Button } from "./Button";

type Props = { values: string[]; onPress: (i: number) => any };

const ROW_SIZE = 4;

export function ButtonSet({ values, onPress }: Props) {
  return (
    <View style={styles.container}>
      {R.map.indexed(values, (value, index) => (
        <Button key={index} title={value} onPress={() => onPress(index)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: (56 + 2 * 8) * ROW_SIZE,
    justifyContent: "center",
  },
});

// TODO: pass values array, which creates button plus has button
// onPress((i) => {})
//  i - index (0..n)
// split by 4
/* <View style={styles.row}>
<Button label="A" />
<Button label="B" />
<Button label="C" />
<Button label="D" />
</View>

<View style={styles.row}>
<Button label="1" />
<Button label="2" />
<Button label="3" />
<Button label="4" />
</View>

<View style={styles.row}>
<Button label="I" />
<Button label="II" />
<Button label="III" />
<Button label="IV" />
</View>

<View style={styles.row}>
<Button label="लं" />
<Button label="α" />
<Button label="δ" />
<Button label="D" />
</View> */
