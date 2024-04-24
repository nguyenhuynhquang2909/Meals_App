import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES} from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";

function MealsOverViewScreen({route, navigation}) {
    const catId = route.params.categoryId
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])
   
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return (
            <MealItem {...mealItemProps} />
        )

    }
    

    return <View style={styles.container}>
        <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
};


export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})