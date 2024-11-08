/* ----------Circle Type--------- */
type Circle = {
  shape: string;
  radius: number;
};

/* ----------Rectangle Type--------- */
type Rectangle = {
  shape: string;
  width: number;
  height: number;
};

/* ----------Union Type of Circle Type and Rectangle Type--------- */

type UnionOfShape = Circle | Rectangle;

/* -------------Shape Are Calculator Function-------- */
const calculateShapeArea = (shapeObj: UnionOfShape): number => {

  if( 'radius' in shapeObj && shapeObj.shape === 'circle' ){
    const areaOfCircle = Math.PI * shapeObj.radius * shapeObj.radius;
    return parseFloat(areaOfCircle.toFixed(2));
  }
  else if ('width' in shapeObj && 'height' in shapeObj && shapeObj.shape === 'rectangle'){
    const areaOfRectangle = shapeObj.width * shapeObj.height;
    return areaOfRectangle;
  }
  else{
    return 0;
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
//console.log(circleArea)

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
//console.log(rectangleArea);

