import { PositionDefinition, RectangleDefinition } from "../src/collision";

test("adds 1 + 2 to equal 3", () => {
    var rect_x = 2
    var rect_y = 4
    var pos_x = 3
    var pos_y = 5
    var w = 10
    var h = 10
    var rect = new RectangleDefinition(rect_x,w,rect_y,h)
    var position = new PositionDefinition(pos_x,pos_y)
    rect.setPostion(position)
    expect(rect.x1).toBe(rect_x+pos_x);
    expect(rect.y1).toBe(rect_y+pos_y);
    expect(rect.x2).toBe(rect_x+pos_x+w);
    expect(rect.y2).toBe(rect_y+pos_y+h);
});