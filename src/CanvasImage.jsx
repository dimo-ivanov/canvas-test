import React, { useState, useEffect } from 'react'
import { Image } from 'react-konva'

const CanvasImage = ({ src, x, y }) => {
  const [img, setImg] = useState(null)

  useEffect(() => {
    const newImg = new window.Image()
    newImg.src = src
    const handleLoad = () => {
      console.log('here')
      setImg(newImg)
    }
    newImg.addEventListener('load', handleLoad)

    return () => newImg.removeEventListener('load', handleLoad)
  }, [src])

  return (
    <Image
      draggable
      x={x}
      y={y}
      image={img}
    />
  )
}

// class CanvasImage extends React.Component {
//   state = {
//     image: null
//   };
//   componentDidMount() {
//     this.loadImage();
//   }
//   componentDidUpdate(oldProps) {
//     if (oldProps.src !== this.props.src) {
//       this.loadImage();
//     }
//   }
//   componentWillUnmount() {
//     this.image.removeEventListener('load', this.handleLoad);
//   }
//   loadImage() {
//     // save to "this" to remove "load" handler on unmount
//     this.image = new window.Image();
//     this.image.src = this.props.src;
//     this.image.addEventListener('load', this.handleLoad);
//   }
//   handleLoad = () => {
//     // after setState react-konva will update canvas and redraw the layer
//     // because "image" property is changed
//     this.setState({
//       image: this.image
//     });
//     // if you keep same image object during source updates
//     // you will have to update layer manually:
//     // this.imageNode.getLayer().batchDraw();
//   };
//   render() {
//     return (
//       <Image
//         x={this.props.x}
//         y={this.props.y}
//         image={this.state.image}
//         ref={node => {
//           this.imageNode = node;
//         }}
//       />
//     );
//   }
// }

export default CanvasImage
