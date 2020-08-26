import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width;
        return Math.round(width / this.blockSize);
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height;
        const boardHeight = totalHeight * (1 - this.headerRatio);
        return Math.round(boardHeight / this.blockSize);
    }
}

export default params;