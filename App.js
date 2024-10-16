import { StyleSheet, View, FlatList, Button } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }
  function hideModalHandler() {
    setIsModalVisible(false);
  }

  function addGoalHanler(enteredGoalText) {
    setListOfGoals((currentListOfGoals) => [
      ...currentListOfGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    hideModalHandler();
  }

  function deleteGoalHandler(id) {
    setListOfGoals((currentListOfGoals) => {
      return currentListOfGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#a065ec"}
          onPress={showModalHandler}
        />
        {isModalVisible && (
          <GoalInput
            onAddGoalPressed={addGoalHanler}
            onDismissModal={hideModalHandler}
            visible={isModalVisible}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
