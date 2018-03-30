/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
export function HexColor(c, alpha) {
  let output = c;
  if (typeof c !== "undefined" && c !== null) {
    const color = c.toUpperCase();
    if (/^#([A-F0-9]{8})$/.test(color)) {
      const alphaHex = color.slice(1, 3);
      if (alphaHex !== "FF" || typeof alpha !== "undefined") {
        const a =
          typeof alpha !== "undefined" ? alpha : parseInt(alphaHex, 16) / 255;
        const r = parseInt(color.slice(3, 5), 16);
        const g = parseInt(color.slice(5, 7), 16);
        const b = parseInt(color.slice(7, 9), 16);
        output = `rgba(${r},${g},${b},${a})`;
      } else {
        output = `#${color.slice(-6)}`;
      }
    } else if (typeof alpha !== "undefined") {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      output = `rgba(${r},${g},${b},${alpha})`;
    }
  }
  return output;
}

export function HoverHexColor(hex) {
  let output = "";
  output += `background: ${HexColor(hex)} !important;\n`;
  output += `border-color: ${HexColor(hex, 0.5)} !important;\n`;
  return output;
}

export function ShadowColor(hex) {
  let output = "";
  const color = HexColor(hex, 0.75);
  const color2 = HexColor(hex, 0.2);
  output += `border-color: ${color} !important;\n`;
  output += `box-shadow: -1px -1px 1px 0 rgba(255,255,255,0.18), 1px 1px 1px 0 ${color2} !important;`;
  return output;
}

export function HoverShadowColor(hex, bg = true) {
  let output = "";
  const color = HexColor(hex);
  const color2 = HexColor(hex, 0.2);
  if (bg) {
    output += `background: ${color} !important;\n`;
  }
  output += `border-color: ${color2} !important;\n`;
  output += `box-shadow: -1px -1px 1px 0 rgba(255,255,255,0.18), 1px 1px 1px 0 ${color2} !important;`;
  return output;
}

const gradientDirection = [
  ["", "", "", ""],
  ["top", "top", "top", "to bottom"],
  ["left", "right", "right", "to right"],
  ["left top", "bottom right", "bottom right", "to bottom right"],
  ["left bottom", "top right", "top right", "to top right"]
];

export function HexGradient(obj, ot) {
  const direction = gradientDirection[ot];
  const tmp = [];
  let output = "";
  for (let i = 0; i < obj.length; i += 1) {
    const os = obj[i].Offset !== null ? ` ${obj[i].Offset * 100}% ` : "";
    tmp.push(HexColor(obj[i].Color) + os);
  }
  const gs = tmp.join(",");
  output += `background: -webkit-linear-gradient(${
    direction[0]
  }, ${gs}) !important;\n`;
  output += `background: -o-linear-gradient(${
    direction[1]
  }, ${gs}) !important;\n`;
  output += `background: -moz-linear-gradient(${
    direction[2]
  }, ${gs}) !important;\n`;
  output += `background: linear-gradient(${direction[3]}, ${gs}) !important;\n`;
  return output;
}

export function HexMergedGradient(obj) {
  let gs = "";
  for (let i = 0; i < obj.length; i += 1) {
    gs = obj[i].Color;
  }
  return HexColor(gs);
}

export function ControlledShadow(obj, classType, isHovering, hex, bg = true) {
  const newObj = obj;
  let baseType = `.theme-${classType}_shadow`;
  if (isHovering) {
    baseType = `${baseType}:hover`;
  }
  let styleString = "";
  const color = HexColor(hex);
  const color2 = HexColor(hex, 0.2);
  if (bg) {
    styleString += `background: ${color} !important;\n`;
  }
  styleString += `border-color: ${color2} !important;\n`;
  styleString += `box-shadow: -1px -1px 1px 0 rgba(255,255,255,0.18), 1px 1px 1px 0 ${color2} !important;`;
  if (!newObj[baseType]) {
    newObj[baseType] = [];
  }
  newObj[baseType].push(`${styleString} !important`);
  return newObj;
}

export function DirectStyle(obj, classType, styleString) {
  const newObj = obj;
  if (!newObj[classType]) {
    newObj[classType] = [];
  }
  newObj[classType].push(`${styleString} !important`);
  return newObj;
}

export function ControlledStyle(
  obj,
  classType,
  isHovering,
  styleType,
  styleString
) {
  const newObj = obj;
  let baseType = `.theme-${classType}`;
  let extendedType = styleType !== "" ? `${baseType}_${styleType}` : baseType;
  const noHoverType = `${baseType}_no-hover`;
  if (isHovering) {
    baseType = `${baseType}:hover`;
    extendedType += ":hover";
  }
  if (styleType !== "active") {
    if (!newObj[baseType]) {
      newObj[baseType] = [];
    }
    newObj[baseType].push(`${styleString} !important`);
    if (!newObj[noHoverType]) {
      newObj[noHoverType] = [];
    }
    newObj[noHoverType].push(`${styleString} !important`);
  }
  if (styleType !== "" && !(isHovering && styleType === "bg")) {
    if (!newObj[extendedType]) {
      newObj[extendedType] = [];
    }
    newObj[extendedType].push(`${styleString} !important`);
    if (!newObj[extendedType]) {
      newObj[extendedType] = [];
    }
    newObj[extendedType].push(`${styleString} !important`);
  }
  return newObj;
}

export function ControlledHoverStyle(
  obj,
  classType,
  hoverIsolated,
  styleType,
  styleString
) {
  const newObj = obj;
  const hoverAppend = hoverIsolated ? ".theme-hover:hover" : ":hover";
  const baseType = `.theme-${classType}${hoverAppend}`;
  const extendedType =
    styleType !== ""
      ? `.theme-${classType}_${styleType}${hoverAppend}`
      : baseType;
  if (styleType !== "active") {
    if (!newObj[baseType]) {
      newObj[baseType] = [];
    }
    newObj[baseType].push(`${styleString} !important`);
  }
  if (styleType !== "") {
    if (!newObj[extendedType]) {
      newObj[extendedType] = [];
    }
    newObj[extendedType].push(`${styleString} !important`);
  }
  const hoverType = `.theme-${classType}_hover`;
  if (!newObj[hoverType]) {
    newObj[hoverType] = [];
  }
  newObj[hoverType].push(`${styleString} !important`);
  return newObj;
}

export function ConcatStyle(fn, data, source) {
  return fn(data, source);
}

export function AddFontStyle(obj, styleClass, fontFamily, fontSize) {
  const newObj = obj;
  if (!newObj[styleClass]) {
    newObj[styleClass] = [];
  }
  newObj[styleClass].push(
    `font-family: '${fontFamily}', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important; font-size: ${fontSize}px;`
  );
  return newObj;
}

export function AppendStyleToDOM(str) {
  const node = document.getElementsByTagName("STYLE")[0];
  node.innerHTML = str;
}
