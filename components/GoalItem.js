import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteItem(props.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={deleteGoalHandler}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#cccccccc",
  },
  goalText: {
    padding: 8,
  },
});
