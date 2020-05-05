import React, { Component } from "react";
import {
    Animated,
    Dimensions,
    Image,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";


import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class ProductScreen extends Component {
    scrollX = new Animated.Value(0);
    renderSteps() {
        const { product } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        return (
            <Block row center middle style={styles.stepsContainer}>
                {
                    product.images.map((item, index) => {
                        const opacity = stepPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.4, 1, 0.4],
                            extrapolate: "clamp"
                        });

                        return (
                            <Block
                                animated
                                flex={false}
                                key={`step-${index}`}
                                color="gray"
                                style={[styles.steps, { opacity }]}
                            />
                        );
                    })
                }
            </Block>
        )
    }

    renderGallery() {
        const { product } = this.props;
        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                data={product.images}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => (
                    <Image
                        source={item}
                        resizeMode="contain"
                        style={{ width, height: height / 2.8 }}
                    />
                )}
                onScroll={Animated.event([{
                    nativeEvent: { contentOffset: { x: this.scrollX } }
                  }],
                  { useNativeDriver: false } // <-- Add this
                  )}
            />
        );
    }

    render() {
        const { product } = this.props;

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Block>
                {this.renderGallery()}
                {this.renderSteps()}
                </Block>                
                <Block style={styles.product}>
                    <Text h2 bold>
                        {product.name}sdfa sfsafsadf asd
                    </Text>
                    <Block flex={false} row margin={[theme.sizes.base, 0]}>
                        {product.tags.map(tag => (
                            <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                                {tag}
                            </Text>
                        ))}
                    </Block>
                    <Text gray light height={22}>
                        {product.description}
                    </Text>

                    <Divider margin={[theme.sizes.padding * 0.9, 0]} />

                    <Block>
                        <Text semibold>Gallery</Text>
                        <Block row margin={[theme.sizes.padding * 0.9, 0]}>
                            {product.images.slice(1, 3).map((image, index) => (
                                <Image
                                    key={`gallery-${index}`}
                                    source={image}
                                    style={styles.image}
                                />
                            ))}
                            <Block
                                flex={false}
                                card
                                center
                                middle
                                color="rgba(197,204,214,0.20)"
                                style={styles.more}
                            >
                                <Text gray>+{product.images.slice(3).length}</Text>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </ScrollView>
        );
    }
}

ProductScreen.defaultProps = {
    product: mocks.products[0]
};

export default ProductScreen;

const styles = StyleSheet.create({
    product: {
        paddingHorizontal: theme.sizes.base * 2.8,
        paddingVertical: theme.sizes.padding
    },
    tag: {
        borderColor: theme.colors.gray2,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: theme.sizes.base,
        paddingHorizontal: theme.sizes.base,
        paddingVertical: theme.sizes.base / 2.5,
        marginRight: theme.sizes.base * 0.625
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: theme.sizes.base
    },
    more: {
        width: 55,
        height: 55
    },
	stepsContainer: {
		position: 'absolute',
        bottom: theme.sizes.base / 2,
		right: 0,
		left: 0
	},
	steps: {
		width: 5,
		height: 5,
		borderRadius: 5,
		marginHorizontal: 2.5
	}
});
