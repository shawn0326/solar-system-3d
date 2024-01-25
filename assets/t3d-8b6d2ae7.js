/**
 * @license
 * Copyright 2021-present uino
 * SPDX-License-Identifier: BSD-3-Clause
 */class v{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}set(e=0,t=0,n=0){return this.x=e,this.y=t,this.z=n,this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}getLength(){return Math.sqrt(this.getLengthSquared())}getLengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}normalize(e=1){const t=this.getLength()||1,n=e/t;return this.x*=n,this.y*=n,this.z*=n,this}subtract(e,t=new v){return t.set(this.x-e.x,this.y-e.y,this.z-e.z)}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-i*o,this.y=i*r-n*c,this.z=n*o-s*r,this}cross(e){return this.crossVectors(this,e)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e._x,r=e._y,o=e._z,c=e._w,l=c*t+r*s-o*n,h=c*n+o*t-i*s,u=c*s+i*n-r*t,f=-i*t-r*n-o*s;return this.x=l*c+f*-i+h*-o-u*-r,this.y=h*c+f*-r+u*-i-l*-o,this.z=u*c+f*-o+l*-r-h*-i,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,r=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*r,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*r,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*r,this}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}setFromMatrixPosition(e){return this.setFromMatrixColumn(e,3)}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}setFromSpherical(e){const t=Math.sin(e.phi)*e.radius;return this.x=t*Math.sin(e.theta),this.y=Math.cos(e.phi)*e.radius,this.z=t*Math.cos(e.theta),this}project(e){return this.applyMatrix4(e.projectionViewMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.worldMatrix)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}clone(){return new v(this.x,this.y,this.z)}}const Qs=new v;class O{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}isIdentity(){const e=this.elements;return e[0]===1&&e[4]===0&&e[8]===0&&e[12]===0&&e[1]===0&&e[5]===1&&e[9]===0&&e[13]===0&&e[2]===0&&e[6]===0&&e[10]===1&&e[14]===0&&e[3]===0&&e[7]===0&&e[11]===0&&e[15]===1}set(e,t,n,s,i,r,o,c,l,h,u,f,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=i,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}clone(){return new O().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1)}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],A=n[3],E=n[7],M=n[11],S=n[15],w=s[0],N=s[4],U=s[8],D=s[12],Y=s[1],F=s[5],C=s[9],P=s[13],j=s[2],H=s[6],pe=s[10],oe=s[14],$=s[3],G=s[7],I=s[11],B=s[15];return i[0]=r*w+o*Y+c*j+l*$,i[4]=r*N+o*F+c*H+l*G,i[8]=r*U+o*C+c*pe+l*I,i[12]=r*D+o*P+c*oe+l*B,i[1]=h*w+u*Y+f*j+d*$,i[5]=h*N+u*F+f*H+d*G,i[9]=h*U+u*C+f*pe+d*I,i[13]=h*D+u*P+f*oe+d*B,i[2]=p*w+_*Y+g*j+m*$,i[6]=p*N+_*F+g*H+m*G,i[10]=p*U+_*C+g*pe+m*I,i[14]=p*D+_*P+g*oe+m*B,i[3]=A*w+E*Y+M*j+S*$,i[7]=A*N+E*F+M*H+S*G,i[11]=A*U+E*C+M*pe+S*I,i[15]=A*D+E*P+M*oe+S*B,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}inverse(){return this.getInverse(this)}getInverse(e){const t=this.elements,n=e.elements,s=n[0],i=n[1],r=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],d=n[9],p=n[10],_=n[11],g=n[12],m=n[13],A=n[14],E=n[15],M=d*A*u-m*p*u+m*h*_-l*A*_-d*h*E+l*p*E,S=g*p*u-f*A*u-g*h*_+c*A*_+f*h*E-c*p*E,w=f*m*u-g*d*u+g*l*_-c*m*_-f*l*E+c*d*E,N=g*d*h-f*m*h-g*l*p+c*m*p+f*l*A-c*d*A,U=s*M+i*S+r*w+o*N;if(U===0)return console.warn("Matrix4: can not invert matrix, determinant is 0"),this.identity();const D=1/U;return t[0]=M*D,t[1]=(m*p*o-d*A*o-m*r*_+i*A*_+d*r*E-i*p*E)*D,t[2]=(l*A*o-m*h*o+m*r*u-i*A*u-l*r*E+i*h*E)*D,t[3]=(d*h*o-l*p*o-d*r*u+i*p*u+l*r*_-i*h*_)*D,t[4]=S*D,t[5]=(f*A*o-g*p*o+g*r*_-s*A*_-f*r*E+s*p*E)*D,t[6]=(g*h*o-c*A*o-g*r*u+s*A*u+c*r*E-s*h*E)*D,t[7]=(c*p*o-f*h*o+f*r*u-s*p*u-c*r*_+s*h*_)*D,t[8]=w*D,t[9]=(g*d*o-f*m*o-g*i*_+s*m*_+f*i*E-s*d*E)*D,t[10]=(c*m*o-g*l*o+g*i*u-s*m*u-c*i*E+s*l*E)*D,t[11]=(f*l*o-c*d*o-f*i*u+s*d*u+c*i*_-s*l*_)*D,t[12]=N*D,t[13]=(f*m*r-g*d*r+g*i*p-s*m*p-f*i*A+s*d*A)*D,t[14]=(g*l*r-c*m*r-g*i*h+s*m*h+c*i*A-s*l*A)*D,t[15]=(c*d*r-f*l*r+f*i*h-s*d*h-c*i*p+s*l*p)*D,this}transform(e,t,n){const s=this.elements,i=n._x,r=n._y,o=n._z,c=n._w,l=i+i,h=r+r,u=o+o,f=i*l,d=i*h,p=i*u,_=r*h,g=r*u,m=o*u,A=c*l,E=c*h,M=c*u,S=t.x,w=t.y,N=t.z;return s[0]=(1-(_+m))*S,s[1]=(d+M)*S,s[2]=(p-E)*S,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(f+m))*w,s[6]=(g+A)*w,s[7]=0,s[8]=(p+E)*N,s[9]=(g-A)*N,s[10]=(1-(f+_))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}makeRotationFromQuaternion(e){const t=this.elements,n=e.x,s=e.y,i=e.z,r=e.w,o=n+n,c=s+s,l=i+i,h=n*o,u=n*c,f=n*l,d=s*c,p=s*l,_=i*l,g=r*o,m=r*c,A=r*l;return t[0]=1-(d+_),t[4]=u-A,t[8]=f+m,t[1]=u+A,t[5]=1-(h+_),t[9]=p-g,t[2]=f-m,t[6]=p+g,t[10]=1-(h+d),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}extractRotation(e){const t=this.elements,n=e.elements,s=1/je.setFromMatrixColumn(e,0).getLength(),i=1/je.setFromMatrixColumn(e,1).getLength(),r=1/je.setFromMatrixColumn(e,2).getLength();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}lookAtRH(e,t,n){const s=this.elements;return se.subVectors(e,t),se.getLengthSquared()===0&&(se.z=1),se.normalize(),Le.crossVectors(n,se),Le.getLengthSquared()===0&&(Math.abs(n.z)===1?se.x+=1e-4:se.z+=1e-4,se.normalize(),Le.crossVectors(n,se)),Le.normalize(),Nt.crossVectors(se,Le),s[0]=Le.x,s[4]=Nt.x,s[8]=se.x,s[1]=Le.y,s[5]=Nt.y,s[9]=se.y,s[2]=Le.z,s[6]=Nt.z,s[10]=se.z,this}decompose(e,t,n){const s=this.elements;let i=je.set(s[0],s[1],s[2]).getLength();const r=je.set(s[4],s[5],s[6]).getLength(),o=je.set(s[8],s[9],s[10]).getLength();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],_e.copy(this);const l=1/i,h=1/r,u=1/o;return _e.elements[0]*=l,_e.elements[1]*=l,_e.elements[2]*=l,_e.elements[4]*=h,_e.elements[5]*=h,_e.elements[6]*=h,_e.elements[8]*=u,_e.elements[9]*=u,_e.elements[10]*=u,t.setFromRotationMatrix(_e),n.x=i,n.y=r,n.z=o,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+i*c*u-s*l*u-i*o*f+n*l*f+s*o*d-n*c*d)+_*(+t*c*d-t*l*f+i*r*f-s*r*d+s*l*h-i*c*h)+g*(+t*l*u-t*o*d-i*r*u+n*r*d+i*o*h-n*l*h)+m*(-s*o*h-t*c*u+t*o*f+s*r*u-n*r*f+n*c*h)}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,r=e.x,o=e.y,c=e.z,l=i*r,h=i*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,i*c*c+n,0,0,0,0,1)}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const je=new v,_e=new O,Le=new v,Nt=new v,se=new v;class We{constructor(e=0,t=0,n=0,s=1){this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=i[r+0],d=i[r+1],p=i[r+2],_=i[r+3];if(o===0){e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==p){let g=1-o;const m=c*f+l*d+h*p+u*_,A=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const S=Math.sqrt(E),w=Math.atan2(S,m*A);g=Math.sin(g*w)/S,o=Math.sin(o*w)/S}const M=o*A;if(c=c*g+f*M,l=l*g+d*M,h=h*g+p*M,u=u*g+_*M,g===1-o){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,i,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=i[r],f=i[r+1],d=i[r+2],p=i[r+3];return e[t]=o*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-o*d,e[t+2]=l*p+h*d+o*f-c*u,e[t+3]=h*p-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this.onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this.onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this.onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this.onChangeCallback()}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this.onChangeCallback(),this}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}lerpQuaternions(e,t,n){if(n===0)return this.copy(e);if(n===1)return this.copy(t);const s=e._w,i=e._x,r=e._y,o=e._z;let c=t._w,l=t._x,h=t._y,u=t._z;s*c+i*l+r*h+o*u<0&&(c=-c,l=-l,h=-h,u=-u),this._w=s+n*(c-s),this._x=i+n*(l-i),this._y=r+n*(h-r),this._z=o+n*(u-o);const d=1/Math.sqrt(this._w*this._w+this._x*this._x+this._y*this._y+this._z*this._z);return this._w*=d,this._x*=d,this._y*=d,this._z*=d,this.onChangeCallback(),this}slerpQuaternions(e,t,n){if(n===0)return this.copy(e);if(n===1)return this.copy(t);const s=e._w,i=e._x,r=e._y,o=e._z;let c=t._w,l=t._x,h=t._y,u=t._z,f=s*c+i*l+r*h+o*u;if(f<0&&(f=-f,c=-c,l=-l,h=-h,u=-u),f<.95){const d=Math.acos(f),p=1/Math.sin(d),_=Math.sin(d*(1-n))*p,g=Math.sin(d*n)*p;this._w=s*_+c*g,this._x=i*_+l*g,this._y=r*_+h*g,this._z=o*_+u*g}else{this._w=s+n*(c-s),this._x=i+n*(l-i),this._y=r+n*(h-r),this._z=o+n*(u-o);const d=1/Math.sqrt(this._w*this._w+this._x*this._x+this._y*this._y+this._z*this._z);this._w*=d,this._x*=d,this._y*=d,this._z*=d}return this.onChangeCallback(),this}set(e=0,t=0,n=0,s=1){return this._x=e,this._y=t,this._z=n,this._w=s,this.onChangeCallback(),this}clone(){return new We(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w!==void 0?e.w:1,this.onChangeCallback(),this}setFromEuler(e,t=!0){const n=Math.cos(e._x/2),s=Math.cos(e._y/2),i=Math.cos(e._z/2),r=Math.sin(e._x/2),o=Math.sin(e._y/2),c=Math.sin(e._z/2),l=e._order;return l==="XYZ"?(this._x=r*s*i+n*o*c,this._y=n*o*i-r*s*c,this._z=n*s*c+r*o*i,this._w=n*s*i-r*o*c):l==="YXZ"?(this._x=r*s*i+n*o*c,this._y=n*o*i-r*s*c,this._z=n*s*c-r*o*i,this._w=n*s*i+r*o*c):l==="ZXY"?(this._x=r*s*i-n*o*c,this._y=n*o*i+r*s*c,this._z=n*s*c+r*o*i,this._w=n*s*i-r*o*c):l==="ZYX"?(this._x=r*s*i-n*o*c,this._y=n*o*i+r*s*c,this._z=n*s*c-r*o*i,this._w=n*s*i+r*o*c):l==="YZX"?(this._x=r*s*i+n*o*c,this._y=n*o*i+r*s*c,this._z=n*s*c-r*o*i,this._w=n*s*i-r*o*c):l==="XZY"&&(this._x=r*s*i-n*o*c,this._y=n*o*i-r*s*c,this._z=n*s*c+r*o*i,this._w=n*s*i+r*o*c),t===!0&&this.onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;let d;return f>0?(d=.5/Math.sqrt(f+1),this._w=.25/d,this._x=(h-c)*d,this._y=(i-l)*d,this._z=(r-s)*d):n>o&&n>u?(d=2*Math.sqrt(1+n-o-u),this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(i+l)/d):o>u?(d=2*Math.sqrt(1+o-n-u),this._w=(i-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d):(d=2*Math.sqrt(1+u-n-o),this._w=(r-s)/d,this._x=(i+l)/d,this._y=(c+h)/d,this._z=.25*d),this.onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+s*l-i*c,this._y=s*h+r*c+i*o-n*l,this._z=i*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-i*l,this.onChangeCallback(),this}toMatrix4(e=new O){const t=e.elements,n=2*this._x*this._y,s=2*this._x*this._z,i=2*this._x*this._w,r=2*this._y*this._z,o=2*this._y*this._w,c=2*this._z*this._w,l=this._x*this._x,h=this._y*this._y,u=this._z*this._z,f=this._w*this._w;return t[0]=l-h-u+f,t[4]=n-c,t[8]=s+o,t[12]=0,t[1]=n+c,t[5]=-l+h-u+f,t[9]=r-i,t[13]=0,t[2]=s-o,t[6]=r+i,t[10]=-l-h+u+f,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,e}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this.onChangeCallback(),this}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}onChange(e){return this.onChangeCallback=e,this}onChangeCallback(){}}class Qt{static getValueSize(){return this.values.length/this.times.length}static interpolate(e,t,n,s){throw new Error("Interpolant: call to abstract method")}static copyValue(e,t){const n=this.values,s=this.valueSize,i=s*e;for(let r=0;r<s;r++)t[r]=n[i+r];return t}}class lt extends Qt{static interpolate(e,t,n,s){const i=this.values,r=this.valueSize,o=r*e;for(let c=0;c<r;c++)s[c]=i[o+c];return s}}class qn extends Qt{static interpolate(e,t,n,s){const i=this.values,r=this.valueSize,o=e*r,c=(e+1)*r;let l,h;for(let u=0;u<r;u++)l=i[o+u],h=i[c+u],l!==void 0&&h!==void 0?s[u]=l*(1-t)+h*t:s[u]=l;return s}}class Yn extends Qt{static interpolate(e,t,n,s){const i=this.values,r=this.valueSize;return We.slerpFlat(s,0,i,e*r,i,(e+1)*r,t),s}}class us extends Qt{static getValueSize(){return this.values.length/this.times.length/3}static interpolate(e,t,n,s){const i=this.values,r=this.valueSize,o=r*2,c=r*3,l=t*t,h=l*t,u=e*c,f=u+c,d=-2*h+3*l,p=h-l,_=1-d,g=p-l+t;for(let m=0;m<r;m++){const A=i[u+m+r],E=i[u+m+o]*n,M=i[f+m+r],S=i[f+m]*n;s[m]=_*A+g*E+d*M+p*S}return s}static copyValue(e,t){const n=this.values,s=this.valueSize,i=s*e*3+s;for(let r=0;r<s;r++)t[r]=n[i+r];return t}}class Ks extends us{static interpolate(e,t,n,s){const i=super.interpolate(e,t,n,s);return js.fromArray(i).normalize().toArray(i),i}}const js=new We;class dt{constructor(e,t,n,s,i=qn){this.target=e,this.propertyPath=t,this.name=this.target.uuid+"."+t,this.times=n,this.values=s,this.valueSize=0,this.interpolant=null,i===!0?i=qn:i===!1&&(i=lt),this.setInterpolant(i)}setInterpolant(e){return this.valueSize=e.getValueSize.call(this),this.interpolant=e,this}getValue(e,t){const n=this.interpolant,s=this.times,i=s.length;if(e<=s[0])return n.copyValue.call(this,0,t);if(e>=s[i-1])return n.copyValue.call(this,i-1,t);let r=i-1;for(;e<s[r]&&r>0;)r--;const o=s[r+1]-s[r],c=(e-s[r])/o;return n.interpolate.call(this,r,c,o,t)}}class Zs extends dt{constructor(e,t,n,s,i=lt){i===!0&&(i=lt),super(e,t,n,s,i)}}Zs.prototype.valueTypeName="bool";class $s extends dt{constructor(e,t,n,s,i){super(e,t,n,s,i)}}$s.prototype.valueTypeName="color";class ds extends dt{constructor(e,t,n,s,i){super(e,t,n,s,i)}}ds.prototype.valueTypeName="number";class Qn extends dt{constructor(e,t,n,s,i=Yn){i===!0&&(i=Yn),super(e,t,n,s,i)}}Qn.prototype.valueTypeName="quaternion";class Js extends dt{constructor(e,t,n,s,i=lt){i===!0&&(i=lt),super(e,t,n,s,i)}}Js.prototype.valueTypeName="string";class fs extends dt{constructor(e,t,n,s,i){super(e,t,n,s,i)}}fs.prototype.valueTypeName="vector";const Ue={BASIC:"basic",LAMBERT:"lambert",PHONG:"phong",PBR:"pbr",PBR2:"pbr2",POINT:"point",LINE:"line",SHADER:"shader",DEPTH:"depth",DISTANCE:"distance"},ve={NONE:"none",NORMAL:"normal",ADD:"add",SUB:"sub",MUL:"mul",CUSTOM:"custom"},Ae={ADD:100,SUBTRACT:101,REVERSE_SUBTRACT:102,MIN:103,MAX:104},re={ZERO:200,ONE:201,SRC_COLOR:202,SRC_ALPHA:203,SRC_ALPHA_SATURATE:204,DST_COLOR:205,DST_ALPHA:206,ONE_MINUS_SRC_COLOR:207,ONE_MINUS_SRC_ALPHA:208,ONE_MINUS_DST_COLOR:209,ONE_MINUS_DST_ALPHA:210},Ze={NONE:"none",FRONT:"front",BACK:"back",FRONT_AND_BACK:"front_and_back"},ue={FRONT:"front",BACK:"back",DOUBLE:"double"},ct={SMOOTH_SHADING:"smooth_shading",FLAT_SHADING:"flat_shading"},x={DEPTH_COMPONENT:1e3,DEPTH_STENCIL:1001,STENCIL_INDEX8:1002,ALPHA:1003,RED:1004,RGB:1005,RGBA:1006,LUMINANCE:1007,LUMINANCE_ALPHA:1008,RED_INTEGER:1010,RG:1011,RG_INTEGER:1012,RGB_INTEGER:1013,RGBA_INTEGER:1014,R32F:1100,R16F:1101,R8:1102,RG32F:1103,RG16F:1104,RG8:1105,RGB32F:1106,RGB16F:1107,RGB8:1108,RGBA32F:1109,RGBA16F:1110,RGBA8:1111,RGBA4:1112,RGB5_A1:1113,DEPTH_COMPONENT32F:1114,DEPTH_COMPONENT24:1115,DEPTH_COMPONENT16:1116,DEPTH24_STENCIL8:1117,DEPTH32F_STENCIL8:1118,RGB_S3TC_DXT1:1200,RGBA_S3TC_DXT1:1201,RGBA_S3TC_DXT3:1202,RGBA_S3TC_DXT5:1203,RGB_PVRTC_4BPPV1:1204,RGB_PVRTC_2BPPV1:1205,RGBA_PVRTC_4BPPV1:1206,RGBA_PVRTC_2BPPV1:1207,RGB_ETC1:1208,RGBA_ASTC_4x4:1209,RGBA_BPTC:1210},b={UNSIGNED_BYTE:1500,UNSIGNED_SHORT_5_6_5:1501,UNSIGNED_SHORT_4_4_4_4:1502,UNSIGNED_SHORT_5_5_5_1:1503,UNSIGNED_SHORT:1504,UNSIGNED_INT:1505,UNSIGNED_INT_24_8:1506,FLOAT:1507,HALF_FLOAT:1508,FLOAT_32_UNSIGNED_INT_24_8_REV:1509,BYTE:1510,SHORT:1511,INT:1512},R={NEAREST:1600,LINEAR:1601,NEAREST_MIPMAP_NEAREST:1602,LINEAR_MIPMAP_NEAREST:1603,NEAREST_MIPMAP_LINEAR:1604,LINEAR_MIPMAP_LINEAR:1605},q={REPEAT:1700,CLAMP_TO_EDGE:1701,MIRRORED_REPEAT:1702},ht={LEQUAL:515,GEQUAL:518,LESS:513,GREATER:516,EQUAL:514,NOTEQUAL:517,ALWAYS:519,NEVER:512},rn={KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056},ae={HARD:"hard",POISSON_SOFT:"poisson_soft",PCF3_SOFT:"pcf3_soft",PCF5_SOFT:"pcf5_soft",PCSS16_SOFT:"pcss16_soft",PCSS32_SOFT:"pcss32_soft",PCSS64_SOFT:"pcss64_soft"},he={LINEAR:"linear",SRGB:"sRGB",GAMMA:"Gamma"},er={MULTIPLY:"ENVMAP_BLENDING_MULTIPLY",MIX:"ENVMAP_BLENDING_MIX",ADD:"ENVMAP_BLENDING_ADD"},ps={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ve={NONE:0,RGB:1,RGBA:2},y={COLOR_ATTACHMENT0:2e3,COLOR_ATTACHMENT1:2001,COLOR_ATTACHMENT2:2002,COLOR_ATTACHMENT3:2003,COLOR_ATTACHMENT4:2004,COLOR_ATTACHMENT5:2005,COLOR_ATTACHMENT6:2006,COLOR_ATTACHMENT7:2007,COLOR_ATTACHMENT8:2008,COLOR_ATTACHMENT9:2009,COLOR_ATTACHMENT10:2010,COLOR_ATTACHMENT11:2011,COLOR_ATTACHMENT12:2012,COLOR_ATTACHMENT13:2013,COLOR_ATTACHMENT14:2014,COLOR_ATTACHMENT15:2015,DEPTH_ATTACHMENT:2020,STENCIL_ATTACHMENT:2021,DEPTH_STENCIL_ATTACHMENT:2030},tr={STREAM_DRAW:35040,STREAM_READ:35041,STREAM_COPY:35042,STATIC_DRAW:35044,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_DRAW:35048,DYNAMIC_READ:35049,DYNAMIC_COPY:35050},an={ANY_SAMPLES_PASSED:7e3,ANY_SAMPLES_PASSED_CONSERVATIVE:7001,TIME_ELAPSED:7002};class xt{addEventListener(e,t,n){this._eventMap===void 0&&(this._eventMap={});const s=this._eventMap;s[e]===void 0&&(s[e]=[]),s[e].push({listener:t,thisObject:n||this})}removeEventListener(e,t,n){if(this._eventMap===void 0)return;const i=this._eventMap[e];if(i!==void 0)for(let r=0,o=i.length;r<o;r++){const c=i[r];if(c.listener===t&&c.thisObject===(n||this)){i.splice(r,1);break}}}dispatchEvent(e){if(this._eventMap===void 0)return;const n=this._eventMap[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,r=s.length;i<r;i++){const o=s[i];o.listener.call(o.thisObject,e)}e.target=null}}}class nr{constructor(e,t,n=-1){this.name=e,this.tracks=t,this.duration=n,this.duration<0&&this.resetDuration()}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n<s;n++){const i=e[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}}class ir{constructor(e,t,n){this.isLoading=!1,this.itemsLoaded=0,this.itemsTotal=0,this.urlModifier=void 0,this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n}itemStart(e){this.itemsTotal++,this.isLoading===!1&&this.onStart!==void 0&&this.onStart(e,this.itemsLoaded,this.itemsTotal),this.isLoading=!0}itemEnd(e){this.itemsLoaded++,this.onProgress!==void 0&&this.onProgress(e,this.itemsLoaded,this.itemsTotal),this.itemsLoaded===this.itemsTotal&&(this.isLoading=!1,this.onLoad!==void 0&&this.onLoad())}itemError(e){this.onError!==void 0&&this.onError(e)}resolveURL(e){return this.urlModifier?this.urlModifier(e):e}setURLModifier(e){return this.urlModifier=e,this}}const _s=new ir;class Kt{constructor(e){this.manager=e!==void 0?e:_s,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,i){n.load(e,s,t,i)})}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class sr extends Kt{constructor(e){super(e),this.responseType=void 0,this.mimeType=void 0}load(e,t,n,s){e===void 0&&(e=""),this.path!=null&&(e=this.path+e),e=this.manager.resolveURL(e);const i=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,o=this.responseType;fetch(i).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("t3d.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const l=c.body.getReader(),h=c.headers.get("Content-Length"),u=h?parseInt(h):0,f=u!==0;let d=0;const p=new ReadableStream({start(_){g();function g(){l.read().then(({done:m,value:A})=>{m?_.close():(d+=A.byteLength,n!==void 0&&n(new ProgressEvent("progress",{lengthComputable:f,loaded:d,total:u})),_.enqueue(A),g())})}}});return new Response(p)}else throw new rr(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(o){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,r));case"json":return c.json();default:if(r===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(r),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(d=>f.decode(d))}}}).then(c=>{t&&t(c)}).catch(c=>{s&&s(c),this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rr extends Error{constructor(e,t){super(e),this.response=t}}class ms extends Kt{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,r=document.createElementNS("http://www.w3.org/1999/xhtml","img");function o(){l(),t&&t(this),i.manager.itemEnd(e)}function c(h){l(),s&&s(h),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){r.removeEventListener("load",o,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",o,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),i.manager.itemStart(e),r.src=e,r}}class z{constructor(e=0,t=0){this.x=e,this.y=t}set(e=0,t=0){return this.x=e,this.y=t,this}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}getLength(){return Math.sqrt(this.getLengthSquared())}getLengthSquared(){return this.x*this.x+this.y*this.y}normalize(e=1){const t=this.getLength()||1,n=e/t;return this.x*=n,this.y*=n,this}subtract(e,t=new z){return t.set(this.x-e.x,this.y-e.y)}sub(e){return this.x-=e.x,this.y-=e.y,this}copy(e){return this.x=e.x,this.y=e.y,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}add(e){return this.x+=e.x,this.y+=e.y,this}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}clone(){return new z(this.x,this.y)}}const ye=[new v,new v,new v,new v,new v,new v,new v,new v];class ft{constructor(e,t){this.min=e!==void 0?e:new v(1/0,1/0,1/0),this.max=t!==void 0?t:new v(-1/0,-1/0,-1/0)}set(e,t){this.min.copy(e),this.max.copy(t)}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByBox3(e){return this.min.min(e.min),this.max.max(e.max),this}setFromArray(e,t=3,n=0){let s=1/0,i=1/0,r=1/0,o=-1/0,c=-1/0,l=-1/0;for(let h=0,u=e.length;h<u;h+=t){const f=e[h+n],d=e[h+n+1],p=e[h+n+2];f<s&&(s=f),d<i&&(i=d),p<r&&(r=p),f>o&&(o=f),d>c&&(c=d),p>l&&(l=p)}return this.min.set(s,i,r),this.max.set(o,c,l),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}getCenter(e=new v){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e=new v){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ye),this)}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gt),Lt.subVectors(this.max,gt),$e.subVectors(e.a,gt),Je.subVectors(e.b,gt),et.subVectors(e.c,gt),Pe.subVectors(Je,$e),be.subVectors(et,Je),Ge.subVectors($e,et);let t=[0,-Pe.z,Pe.y,0,-be.z,be.y,0,-Ge.z,Ge.y,Pe.z,0,-Pe.x,be.z,0,-be.x,Ge.z,0,-Ge.x,-Pe.y,Pe.x,0,-be.y,be.x,0,-Ge.y,Ge.x,0];return!on(t,$e,Je,et,Lt)||(t=[1,0,0,0,1,0,0,0,1],!on(t,$e,Je,et,Lt))?!1:(Pt.crossVectors(Pe,be),t=[Pt.x,Pt.y,Pt.z],on(t,$e,Je,et,Lt))}clone(){return new ft().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}}const $e=new v,Je=new v,et=new v,Pe=new v,be=new v,Ge=new v,gt=new v,Lt=new v,Pt=new v,ze=new v;function on(a,e,t,n,s){for(let i=0,r=a.length-3;i<=r;i+=3){ze.fromArray(a,i);const o=s.x*Math.abs(ze.x)+s.y*Math.abs(ze.y)+s.z*Math.abs(ze.z),c=e.dot(ze),l=t.dot(ze),h=n.dot(ze);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}class Xe{constructor(e,t,n){if(this.r=0,this.g=0,this.b=0,t===void 0&&n===void 0)return this.setHex(e);this.setRGB(e,t,n)}lerpColors(e,t,n){this.r=n*(t.r-e.r)+e.r,this.g=n*(t.g-e.g)+e.g,this.b=n*(t.b-e.b)+e.b}lerp(e,t){this.lerpColors(this,e,t)}clone(){return new Xe(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}getHex(){return ln(this.r*255,0,255)<<16^ln(this.g*255,0,255)<<8^ln(this.b*255,0,255)<<0}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ar(e,1),t=Math.max(0,Math.min(1,t)),n=Math.max(0,Math.min(1,n)),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,i=2*n-s;this.r=cn(i,s,e+1/3),this.g=cn(i,s,e),this.b=cn(i,s,e-1/3)}return this}convertSRGBToLinear(){return this.r=hn(this.r),this.g=hn(this.g),this.b=hn(this.b),this}convertLinearToSRGB(){return this.r=un(this.r),this.g=un(this.g),this.b=un(this.b),this}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}}function ar(a,e){return(a%e+e)%e}function cn(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function ln(a,e,t){return Math.max(e,Math.min(t,a))}function hn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function un(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const fi=new O;class ut{constructor(e=0,t=0,n=0,s=ut.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this.onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this.onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this.onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this.onChangeCallback()}clone(){return new ut(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this}set(e=0,t=0,n=0,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this.onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];return t==="XYZ"?(this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,i)):(this._x=Math.atan2(f,l),this._z=0)):t==="YXZ"?(this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.99999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,i),this._z=0)):t==="ZXY"?(this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.99999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,i))):t==="ZYX"?(this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.99999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-r,l))):t==="YZX"?(this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.99999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,d))):t==="XZY"?(this._z=Math.asin(-tt(r,-1,1)),Math.abs(r)<.99999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,d),this._y=0)):console.warn("given unsupported order: "+t),this._order=t,n===!0&&this.onChangeCallback(),this}setFromQuaternion(e,t,n){return e.toMatrix4(fi),this.setFromRotationMatrix(fi,t,n)}onChange(e){return this.onChangeCallback=e,this}onChangeCallback(){}}ut.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];ut.DefaultOrder="XYZ";function tt(a,e,t){return Math.max(e,Math.min(t,a))}class ke{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,i,r,o,c,l){const h=this.elements;return h[0]=e,h[3]=t,h[6]=n,h[1]=s,h[4]=i,h[7]=r,h[2]=o,h[5]=c,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1)}inverse(){return this.getInverse(this)}getInverse(e){const t=e.elements,n=this.elements,s=t[0],i=t[1],r=t[2],o=t[3],c=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=f*c-l*u,p=l*h-f*o,_=u*o-c*h,g=s*d+i*p+r*_;if(g===0)return console.warn("Matrix3: .getInverse() can not invert matrix, determinant is 0"),this.identity();const m=1/g;return n[0]=d*m,n[1]=(r*u-f*i)*m,n[2]=(l*i-r*c)*m,n[3]=p*m,n[4]=(f*s-r*h)*m,n[5]=(r*o-l*s)*m,n[6]=_*m,n[7]=(i*h-u*s)*m,n[8]=(c*s-i*o)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=s[0],g=s[3],m=s[6],A=s[1],E=s[4],M=s[7],S=s[2],w=s[5],N=s[8];return i[0]=r*_+o*A+c*S,i[3]=r*g+o*E+c*w,i[6]=r*m+o*M+c*N,i[1]=l*_+h*A+u*S,i[4]=l*g+h*E+u*w,i[7]=l*m+h*M+u*N,i[2]=f*_+d*A+p*S,i[5]=f*g+d*E+p*w,i[8]=f*m+d*M+p*N,this}transform(e,t,n,s,i,r,o){const c=this.elements,l=Math.cos(i),h=Math.sin(i);return c[0]=l*n,c[3]=-h*s,c[6]=e,c[1]=h*n,c[4]=l*s,c[7]=t,c[2]=0,c[5]=0,c[8]=1,(r||o)&&(c[6]-=r*c[0]+o*c[3],c[7]-=r*c[1]+o*c[4]),this}setUvTransform(e,t,n,s,i,r,o){const c=Math.cos(i),l=Math.sin(i);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1)}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10])}}const pi=new v,or=new v,cr=new ke;class Re{constructor(e=new v(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pi.subVectors(n,t).cross(or.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}normalize(){const e=1/this.normal.getLength();return this.normal.multiplyScalar(e),this.constant*=e,this}distanceToPoint(e){return this.normal.dot(e)+this.constant}coplanarPoint(e=new v){return e.copy(this.normal).multiplyScalar(-this.constant)}clone(){return new Re().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}applyMatrix4(e,t){const n=t||cr.setFromMatrix4(e).inverse().transpose(),s=this.coplanarPoint(pi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}}const bt=new v;class lr{constructor(e=new Re,t=new Re,n=new Re,s=new Re,i=new Re,r=new Re){this.planes=[e,t,n,s,i,r]}set(e,t,n,s,i,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(i),o[5].copy(r),this}setFromMatrix(e){const t=this.planes,n=e.elements,s=n[0],i=n[1],r=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],d=n[9],p=n[10],_=n[11],g=n[12],m=n[13],A=n[14],E=n[15];return t[0].setComponents(o-s,u-c,_-f,E-g).normalize(),t[1].setComponents(o+s,u+c,_+f,E+g).normalize(),t[2].setComponents(o+i,u+l,_+d,E+m).normalize(),t[3].setComponents(o-i,u-l,_-d,E-m).normalize(),t[4].setComponents(o-r,u-h,_-p,E-A).normalize(),t[5].setComponents(o+r,u+h,_+p,E+A).normalize(),this}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bt.x=s.normal.x>0?e.max.x:e.min.x,bt.y=s.normal.y>0?e.max.y:e.min.y,bt.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bt)<0)return!1}return!0}clone(){return new this.constructor().copy(this)}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}}const De=new v,Dt=new v,dn=new v,It=new v,fn=new v;class hr{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}at(e,t=new v){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}distanceSqToPoint(e){const t=De.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(De.copy(this.direction).multiplyScalar(t).add(this.origin),De.distanceToSquared(e))}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t=new v){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectsBox(e){return this.intersectBox(e,De)!==null}intersectBox(e,t){let n,s,i,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(i=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(i=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||i>s||((i>n||n!==n)&&(n=i),(r<s||s!==s)&&(s=r),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}intersectSphere(e,t){De.subVectors(e.center,this.origin);const n=De.dot(this.direction),s=De.dot(De)-n*n,i=e.radius*e.radius;if(s>i)return null;const r=Math.sqrt(i-s),o=n-r,c=n+r;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectTriangle(e,t,n,s,i){dn.subVectors(t,e),It.subVectors(n,e),fn.crossVectors(dn,It);let r=this.direction.dot(fn),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Dt.subVectors(this.origin,e);const c=o*this.direction.dot(It.crossVectors(Dt,It));if(c<0)return null;const l=o*this.direction.dot(dn.cross(Dt));if(l<0||c+l>r)return null;const h=-o*Dt.dot(fn);return h<0?null:this.at(h/r,i)}}const ur=new ft,Et=new v;class yt{constructor(e=new v,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromArray(e,t=3,n=0){const s=this.center;ur.setFromArray(e,t).getCenter(s);let i=0;for(let r=0,o=e.length;r<o;r+=t)Et.fromArray(e,r+n),i=Math.max(i,s.distanceToSquared(Et));return this.radius=Math.sqrt(i),this}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Et.subVectors(e,this.center);const t=Et.getLengthSquared();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Et,s/n),this.radius+=s}return this}clone(){return new yt().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}}class Wt{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}clone(){return new Wt().copy(this)}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.radius=e.getLength(),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e.x,e.z),this.phi=Math.acos(Math.min(1,Math.max(-1,e.y/this.radius)))),this}}class dr{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new v)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,i=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*s),t.addScaledVector(r[2],.488603*i),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*s)),t.addScaledVector(r[5],1.092548*(s*i)),t.addScaledVector(r[6],.315392*(3*i*i-1)),t.addScaledVector(r[7],1.092548*(n*i)),t.addScaledVector(r[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,i=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*s),t.addScaledVector(r[2],2*.511664*i),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*s),t.addScaledVector(r[5],2*.429043*s*i),t.addScaledVector(r[6],.743125*i*i-.247708),t.addScaledVector(r[7],2*.429043*n*i),t.addScaledVector(r[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerpVectors(this.coefficients[n],e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,i=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*i,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*i,t[6]=.315392*(3*i*i-1),t[7]=1.092548*n*i,t[8]=.546274*(n*n-s*s)}}const He=new v,Mt=new v,pn=new v,Tt=new v;class gs{constructor(e=new v,t=new v,n=new v){this.a=e,this.b=t,this.c=n}static normal(e,t,n,s){const i=s||new v;i.subVectors(n,t),He.subVectors(e,t),i.cross(He);const r=i.getLengthSquared();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static barycoordFromPoint(e,t,n,s,i){He.subVectors(s,t),Mt.subVectors(n,t),pn.subVectors(e,t);const r=He.dot(He),o=He.dot(Mt),c=He.dot(pn),l=Mt.dot(Mt),h=Mt.dot(pn),u=r*l-o*o,f=i||new v;if(u===0)return f.set(-2,-1,-1);const d=1/u,p=(l*c-o*h)*d,_=(r*h-o*c)*d;return f.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.barycoordFromPoint(e,t,n,s,Tt),Tt.x>=0&&Tt.y>=0&&Tt.x+Tt.y<=1}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}}class de{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}set(e=0,t=0,n=0,s=1){return this.x=e,this.y=t,this.z=n,this.w=s,this}normalize(){return this.multiplyScalar(1/(this.getLength()||1))}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}getLengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}getManhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*i,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*i,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*i,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}clone(){return new de(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}}const K=[];for(let a=0;a<256;a++)K[a]=(a<16?"0":"")+a.toString(16);function $n(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(K[a&255]+K[a>>8&255]+K[a>>16&255]+K[a>>24&255]+"-"+K[e&255]+K[e>>8&255]+"-"+K[e>>16&15|64]+K[e>>24&255]+"-"+K[t&63|128]+K[t>>8&255]+"-"+K[t>>16&255]+K[t>>24&255]+K[n&255]+K[n>>8&255]+K[n>>16&255]+K[n>>24&255]).toUpperCase()}function Xt(a){return(a&a-1)===0&&a!==0}function _i(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))}function fr(a){return a--,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a++,a}function Es(a){const e={};for(const t in a){const n=a[t];Array.isArray(n)||ArrayBuffer.isView(n)?e[t]=n.slice():e[t]=n}return e}function Ms(a){const e=Array.isArray(a)?[]:{};if(a&&typeof a=="object")for(const t in a)a.hasOwnProperty(t)&&(e[t]=a[t]&&typeof a[t]=="object"?Ms(a[t]):a[t]);return e}let pr=0;const mi=new O;class ge{constructor(){this.id=pr++,this.uuid=$n(),this.name="",this.position=new v,this.scale=new v(1,1,1),this.euler=new ut,this.quaternion=new We;const e=this.euler,t=this.quaternion;e.onChange(function(){t.setFromEuler(e,!1)}),t.onChange(function(){e.setFromQuaternion(t,void 0,!1)}),this.matrix=new O,this.worldMatrix=new O,this.children=new Array,this.parent=null,this.castShadow=!1,this.receiveShadow=!1,this.shadowType=ae.PCF3_SOFT,this.frustumCulled=!0,this.visible=!0,this.renderOrder=0,this.renderLayer=0,this.renderable=!0,this.userData={},this.matrixAutoUpdate=!0,this.matrixNeedsUpdate=!0,this.worldMatrixNeedsUpdate=!0}onBeforeRender(){}onAfterRender(){}add(e){if(e===this){console.error("Object3D.add: object can't be added as a child of itself.",e);return}e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.worldMatrixNeedsUpdate=!0}remove(e){const t=this.children.indexOf(e);t!==-1&&(e.parent=null,this.children.splice(t,1),e.worldMatrixNeedsUpdate=!0)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}updateMatrix(e){if((this.matrixAutoUpdate||this.matrixNeedsUpdate)&&(this.matrix.transform(this.position,this.scale,this.quaternion),this.matrixNeedsUpdate=!1,this.worldMatrixNeedsUpdate=!0),this.worldMatrixNeedsUpdate||e){if(this.worldMatrix.copy(this.matrix),this.parent){const n=this.parent.worldMatrix;this.worldMatrix.premultiply(n)}this.worldMatrixNeedsUpdate=!1,e=!0}const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrix(e)}getWorldDirection(e=new v){const t=this.worldMatrix.elements;return e.set(t[8],t[9],t[10]).normalize()}lookAt(e,t){mi.lookAtRH(e,this.position,t),this.quaternion.setFromRotationMatrix(mi)}raycast(e,t){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.worldMatrix.copy(e.worldMatrix),this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.shadowType=e.shadowType,this.frustumCulled=e.frustumCulled,this.visible=e.visible,this.renderOrder=e.renderOrder,this.renderLayer=e.renderLayer,this.renderable=e.renderable,this.userData=Ms(e.userData),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}const St=new v,_n=[],mn=[],gn=[];let _r=0;class mr{constructor(){this.id=_r++,this.version=0,this.lights=[],this.ambient=new Float32Array([0,0,0]),this.sh=new Float32Array(27),this.hemisphere=[],this.directional=[],this.directionalShadow=[],this.directionalShadowMap=[],this.directionalShadowDepthMap=[],this.directionalShadowMatrix=new Float32Array(0),this.point=[],this.pointShadow=[],this.pointShadowMap=[],this.pointShadowMatrix=new Float32Array(0),this.spot=[],this.spotShadow=[],this.spotShadowMap=[],this.spotShadowDepthMap=[],this.spotShadowMatrix=new Float32Array(0),this.useAmbient=!1,this.useSphericalHarmonics=!1,this.hemisNum=0,this.directsNum=0,this.pointsNum=0,this.spotsNum=0,this.directShadowNum=0,this.pointShadowNum=0,this.spotShadowNum=0,this.totalNum=0,this.shadowsNum=0,this.hash=new gr}begin(){this.totalNum=0,this.shadowsNum=0}push(e){this.lights[this.totalNum++]=e,Kn(e)&&this.shadowsNum++}end(e){this.lights.length=this.totalNum,this.lights.sort(Er),this._setupCache(e),this.hash.update(this),this.version++}_setupCache(e){for(let i=0;i<3;i++)this.ambient[i]=0;for(let i=0;i<this.sh.length;i++)this.sh[i]=0;this.useAmbient=!1,this.useSphericalHarmonics=!1,this.hemisNum=0,this.directsNum=0,this.pointsNum=0,this.spotsNum=0,this.directShadowNum=0,this.pointShadowNum=0,this.spotShadowNum=0;for(let i=0,r=this.lights.length;i<r;i++){const o=this.lights[i];o.isAmbientLight?this._doAddAmbientLight(o):o.isHemisphereLight?this._doAddHemisphereLight(o,e):o.isDirectionalLight?this._doAddDirectLight(o,e):o.isPointLight?this._doAddPointLight(o,e):o.isSpotLight?this._doAddSpotLight(o,e):o.isSphericalHarmonicsLight&&this._doAddSphericalHarmonicsLight(o)}const t=this.directShadowNum;if(t>0){this.directionalShadowMap.length=t,this.directionalShadowDepthMap.length=t,_n.length=t,this.directionalShadowMatrix.length!==t*16&&(this.directionalShadowMatrix=new Float32Array(t*16));for(let i=0;i<t;i++)_n[i].toArray(this.directionalShadowMatrix,i*16)}const n=this.pointShadowNum;if(n>0){this.pointShadowMap.length=n,mn.length=n,this.pointShadowMatrix.length!==n*16&&(this.pointShadowMatrix=new Float32Array(n*16));for(let i=0;i<n;i++)mn[i].toArray(this.pointShadowMatrix,i*16)}const s=this.spotShadowNum;if(s>0){this.spotShadowMap.length=s,this.spotShadowDepthMap.length=s,gn.length=s,this.spotShadowMatrix.length!==s*16&&(this.spotShadowMatrix=new Float32Array(s*16));for(let i=0;i<s;i++)gn[i].toArray(this.spotShadowMatrix,i*16)}}_doAddAmbientLight(e){const t=e.intensity,n=e.color;this.ambient[0]+=n.r*t,this.ambient[1]+=n.g*t,this.ambient[2]+=n.b*t,this.useAmbient=!0}_doAddSphericalHarmonicsLight(e){const t=e.intensity,n=e.sh.coefficients;for(let s=0;s<n.length;s+=1)this.sh[s*3]+=n[s].x*t,this.sh[s*3+1]+=n[s].y*t,this.sh[s*3+2]+=n[s].z*t;this.useSphericalHarmonics=!0}_doAddHemisphereLight(e,t){const n=e.intensity,s=e.color,i=e.groundColor,r=t.useAnchorMatrix,o=Ot(e);o.skyColor[0]=s.r*n,o.skyColor[1]=s.g*n,o.skyColor[2]=s.b*n,o.groundColor[0]=i.r*n,o.groundColor[1]=i.g*n,o.groundColor[2]=i.b*n;const c=e.worldMatrix.elements,l=St.set(c[4],c[5],c[6]).normalize();r&&l.transformDirection(t.anchorMatrixInverse),l.toArray(o.direction),this.hemisphere[this.hemisNum++]=o}_doAddDirectLight(e,t){const n=e.intensity,s=e.color,i=t.useAnchorMatrix,r=Ot(e);r.color[0]=s.r*n,r.color[1]=s.g*n,r.color[2]=s.b*n;const o=e.getWorldDirection(St);if(i&&o.transformDirection(t.anchorMatrixInverse),o.multiplyScalar(-1).toArray(r.direction),e.castShadow){const c=e.shadow,l=Tn(e);l.shadowBias[0]=c.bias,l.shadowBias[1]=c.normalBias,l.shadowMapSize[0]=c.mapSize.x,l.shadowMapSize[1]=c.mapSize.y,l.shadowParams[0]=c.radius,l.shadowParams[1]=c.frustumEdgeFalloff,this.directionalShadow[this.directShadowNum++]=l,c.update(e),c.updateMatrix(),i&&c.matrix.multiply(t.anchorMatrix),this.directionalShadowMap[this.directsNum]=c.map,this.directionalShadowDepthMap[this.directsNum]=c.depthMap,_n[this.directsNum]=c.matrix}this.directional[this.directsNum++]=r}_doAddPointLight(e,t){const n=e.intensity,s=e.color,i=e.distance,r=e.decay,o=t.useAnchorMatrix,c=Ot(e);c.color[0]=s.r*n,c.color[1]=s.g*n,c.color[2]=s.b*n,c.distance=i,c.decay=r;const l=St.setFromMatrixPosition(e.worldMatrix);if(o&&l.applyMatrix4(t.anchorMatrixInverse),c.position[0]=l.x,c.position[1]=l.y,c.position[2]=l.z,e.castShadow){const h=e.shadow,u=Tn(e);u.shadowBias[0]=h.bias,u.shadowBias[1]=h.normalBias,u.shadowMapSize[0]=h.mapSize.x,u.shadowMapSize[1]=h.mapSize.y,u.shadowParams[0]=h.radius,u.shadowParams[1]=0,u.shadowCameraRange[0]=h.cameraNear,u.shadowCameraRange[1]=h.cameraFar,this.pointShadow[this.pointShadowNum++]=u,h.update(e,0),h.matrix.makeTranslation(-l.x,-l.y,-l.z),this.pointShadowMap[this.pointsNum]=h.map,mn[this.pointsNum]=h.matrix}this.point[this.pointsNum++]=c}_doAddSpotLight(e,t){const n=e.intensity,s=e.color,i=e.distance,r=e.decay,o=t.useAnchorMatrix,c=Ot(e);c.color[0]=s.r*n,c.color[1]=s.g*n,c.color[2]=s.b*n,c.distance=i,c.decay=r;const l=St.setFromMatrixPosition(e.worldMatrix);o&&l.applyMatrix4(t.anchorMatrixInverse),c.position[0]=l.x,c.position[1]=l.y,c.position[2]=l.z;const h=e.getWorldDirection(St);o&&h.transformDirection(t.anchorMatrixInverse),h.multiplyScalar(-1).toArray(c.direction);const u=Math.cos(e.angle),f=Math.cos(e.angle*(1-e.penumbra));if(c.coneCos=u,c.penumbraCos=f,e.castShadow){const d=e.shadow,p=Tn(e);p.shadowBias[0]=d.bias,p.shadowBias[1]=d.normalBias,p.shadowMapSize[0]=d.mapSize.x,p.shadowMapSize[1]=d.mapSize.y,p.shadowParams[0]=d.radius,p.shadowParams[1]=d.frustumEdgeFalloff,this.spotShadow[this.spotShadowNum++]=p,d.update(e),d.updateMatrix(),o&&d.matrix.multiply(t.anchorMatrix),this.spotShadowMap[this.spotsNum]=d.map,this.spotShadowDepthMap[this.spotsNum]=d.depthMap,gn[this.spotsNum]=d.matrix}this.spot[this.spotsNum++]=c}}const En=new WeakMap;function Ot(a){if(En.has(a))return En.get(a);let e;return a.isHemisphereLight?e={direction:new Float32Array(3),skyColor:new Float32Array([0,0,0]),groundColor:new Float32Array([0,0,0])}:a.isDirectionalLight?e={direction:new Float32Array(3),color:new Float32Array([0,0,0])}:a.isPointLight?e={position:new Float32Array(3),color:new Float32Array([0,0,0]),distance:0,decay:0}:a.isSpotLight&&(e={position:new Float32Array(3),direction:new Float32Array(3),color:new Float32Array([0,0,0]),distance:0,coneCos:0,penumbraCos:0,decay:0}),En.set(a,e),e}const Mn=new WeakMap;function Tn(a){if(Mn.has(a))return Mn.get(a);let e;return a.isDirectionalLight?e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2)}:a.isPointLight?e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2),shadowCameraRange:new Float32Array(2)}:a.isSpotLight&&(e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2)}),Mn.set(a,e),e}class gr{constructor(){this._factor=new Uint16Array(9)}update(e){this._factor[0]=e.useAmbient?1:0,this._factor[1]=e.useSphericalHarmonics?1:0,this._factor[2]=e.hemisNum,this._factor[3]=e.directsNum,this._factor[4]=e.pointsNum,this._factor[5]=e.spotsNum,this._factor[6]=e.directShadowNum,this._factor[7]=e.pointShadowNum,this._factor[8]=e.spotShadowNum}compare(e){if(!e)return!1;for(let t=0,n=e.length;t<n;t++)if(this._factor[t]!==e[t])return!1;return!0}copyTo(e){return e||(e=new this._factor.constructor(this._factor.length)),e.set(this._factor),e}}function Er(a,e){const t=Kn(a)?1:0;return(Kn(e)?1:0)-t}function Kn(a){return a.shadow&&a.castShadow}class Mr{constructor(e){this.id=e,this.opaque=[],this.opaqueCount=0,this.transparent=[],this.transparentCount=0,this._cache=[],this._cacheIndex=0,this._lastCacheIndex=0,this.opaqueSortCompareFn=Tr,this.transparentSortCompareFn=Sr}begin(){this._cacheIndex=0,this.opaqueCount=0,this.transparentCount=0}end(){this.opaque.length=this.opaqueCount,this.transparent.length=this.transparentCount;const e=this._cacheIndex,t=this._lastCacheIndex;if(t>e){const n=this._cache;for(let s=e;s<t;s++){const i=n[s];i.object=null,i.geometry=null,i.material=null,i.group=null}}this._lastCacheIndex=e}addRenderable(e,t,n,s,i){const r=this._cache;let o=r[this._cacheIndex];o===void 0?(o={object:e,geometry:t,material:n,z:s,renderOrder:e.renderOrder,group:i},r[this._cacheIndex]=o):(o.object=e,o.geometry=t,o.material=n,o.z=s,o.renderOrder=e.renderOrder,o.group=i),n.transparent?(this.transparent[this.transparentCount]=o,this.transparentCount++):(this.opaque[this.opaqueCount]=o,this.opaqueCount++),this._cacheIndex++}sort(){this.opaque.sort(this.opaqueSortCompareFn),jn(this.transparent,0,this.transparent.length,this.transparentSortCompareFn)}}function Tr(a,e){return a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.id-e.id}function Sr(a,e){return a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.material.id!==e.material.id?a.material.id-e.material.id:a.id-e.id}function jn(a,e,t,n){for(;;){if(t-e<=10){Ar(a,e,t,n);return}const s=e+t>>1;let i=a[e],r=a[t-1],o=a[s];if(n(i,r)>0){const d=i;i=r,r=d}if(n(i,o)>=0){const d=i;i=o,o=r,r=d}else if(n(r,o)>0){const p=r;r=o,o=p}a[e]=i,a[t-1]=o;const h=r;let u=e+1,f=t-1;a[s]=a[u],a[u]=h;e:for(let d=u+1;d<f;d++){let p=a[d],_=n(p,h);if(_<0)a[d]=a[u],a[u]=p,u++;else if(_>0){do{if(f--,f==d)break e;const g=a[f];_=n(g,h)}while(_>0);a[d]=a[f],a[f]=p,_<0&&(p=a[d],a[d]=a[u],a[u]=p,u++)}}t-f<u-e?(jn(a,f,t,n),t=u):(jn(a,e,u,n),e=f)}}function Ar(a,e,t,n){for(let s=e+1;s<t;s++){let i;const r=a[s];for(i=s-1;i>=e;i--){const o=a[i];if(n(o,r)>0)a[i+1]=o;else break}a[i+1]=r}}class vr{constructor(){this.layerMap=new Map,this.layerList=[],this.lightsArray=[],this.skeletons=new Set,this._lastLayer=this.createLayer(0)}begin(){for(let e=0,t=this.layerList.length;e<t;e++)this.layerList[e].begin();this.lightsArray.length=0,this.skeletons.clear()}end(){for(let e=0,t=this.layerList.length;e<t;e++)this.layerList[e].end(),this.layerList[e].sort()}push(e,t){e.skeleton&&this.skeletons.add(e.skeleton),Sn.setFromMatrixPosition(e.worldMatrix),Sn.applyMatrix4(t.projectionViewMatrix);const n=Sn.z,s=e.renderLayer||0;let i=this._lastLayer;if(i.id!==s&&(i=this.layerMap.get(s),i||(i=this.createLayer(s)),this._lastLayer=i),Array.isArray(e.material)){const r=e.geometry.groups;for(let o=0;o<r.length;o++){const c=r[o],l=e.material[c.materialIndex];l&&i.addRenderable(e,e.geometry,l,n,c)}}else i.addRenderable(e,e.geometry,e.material,n)}pushLight(e){this.lightsArray.push(e)}setLayer(e,t){this.layerMap.set(e,t),this.layerList.push(t),this.layerList.sort(xr)}createLayer(e){const t=new Mr(e);return this.setLayer(e,t),t}getLayer(e){return this.layerMap.get(e)}removeLayer(e){const t=this.layerMap.get(e);if(t){this.layerMap.delete(e);const n=this.layerList.indexOf(t);n!==-1&&this.layerList.splice(n,1),this._lastLayer===e&&(this._lastLayer=null)}}}const Sn=new v;function xr(a,e){return a.id-e.id}const nt=new Re;let yr=0;class wr{constructor(){this.id=yr++,this.version=0,this.useAnchorMatrix=!1,this.anchorMatrix=new O,this.anchorMatrixInverse=new O,this.disableShadowSampler=!1,this.logarithmicDepthBuffer=!1,this.fog=null,this.environment=null,this.environmentLightIntensity=1,this.clippingPlanesData=new Float32Array([]),this.numClippingPlanes=0}update(e){this.useAnchorMatrix=!e.anchorMatrix.isIdentity(),this.anchorMatrix.copy(e.anchorMatrix),this.anchorMatrixInverse.getInverse(e.anchorMatrix),this.disableShadowSampler=e.disableShadowSampler,this.logarithmicDepthBuffer=e.logarithmicDepthBuffer,this.fog=e.fog,this.environment=e.environment,this.environmentLightIntensity=e.environmentLightIntensity,this.clippingPlanesData.length<e.clippingPlanes.length*4&&(this.clippingPlanesData=new Float32Array(e.clippingPlanes.length*4)),this.setClippingPlanesData(e.clippingPlanes,this.clippingPlanesData),this.numClippingPlanes=e.clippingPlanes.length,this.version++}setClippingPlanesData(e,t){for(let n=0;n<e.length;n++)nt.copy(e[n]),this.useAnchorMatrix&&nt.applyMatrix4(this.anchorMatrixInverse),t[n*4+0]=nt.normal.x,t[n*4+1]=nt.normal.y,t[n*4+2]=nt.normal.z,t[n*4+3]=nt.constant;return t}}function Rr(a){return a.elements[11]===-1}let Cr=0;class Nr{constructor(e,t){this.scene=e,this.lights=t,this.camera={id:Cr++,version:0,near:0,far:0,position:new v,logDepthCameraNear:0,logDepthBufFC:0,viewMatrix:new O,projectionMatrix:new O,projectionViewMatrix:new O,rect:new de(0,0,1,1)},this.gammaFactor=2,this.outputEncoding=he.LINEAR}updateCamera(e){const t=this.scene,n=this.camera,s=e.projectionMatrix;let i=0,r=0;Rr(s)?(i=s.elements[14]/(s.elements[10]-1),r=s.elements[14]/(s.elements[10]+1)):(i=(s.elements[14]+1)/s.elements[10],r=(s.elements[14]-1)/s.elements[10]),n.near=i,n.far=r,t.logarithmicDepthBuffer?(n.logDepthCameraNear=i,n.logDepthBufFC=2/(Math.log(r-i+1)*Math.LOG2E)):(n.logDepthCameraNear=0,n.logDepthBufFC=0),n.position.setFromMatrixPosition(e.worldMatrix),t.useAnchorMatrix&&n.position.applyMatrix4(t.anchorMatrixInverse),n.viewMatrix.copy(e.viewMatrix),t.useAnchorMatrix&&n.viewMatrix.multiply(t.anchorMatrix),n.projectionMatrix.copy(s),n.projectionViewMatrix.copy(s).multiply(n.viewMatrix),n.rect.copy(e.rect),n.version++,this.gammaFactor=e.gammaFactor,this.outputEncoding=e.outputEncoding}}class Ts extends ge{constructor(){super(),this.fog=null,this.environment=null,this.environmentLightIntensity=1,this.clippingPlanes=[],this.disableShadowSampler=!1,this.logarithmicDepthBuffer=!1,this.anchorMatrix=new O,this._sceneData=new wr,this._lightData=new mr,this._renderQueueMap=new WeakMap,this._renderStatesMap=new WeakMap}updateRenderStates(e,t=!0){this._renderStatesMap.has(e)||this._renderStatesMap.set(e,new Nr(this._sceneData,this._lightData));const n=this._renderStatesMap.get(e);return t&&this._sceneData.update(this),n.updateCamera(e),n}getRenderStates(e){return this._renderStatesMap.get(e)}updateRenderQueue(e,t=!0,n=!0){this._renderQueueMap.has(e)||this._renderQueueMap.set(e,new vr);const s=this._renderQueueMap.get(e);if(s.begin(),this._pushToRenderQueue(this,e,s),s.end(),t){this._lightData.begin();for(const i of s.lightsArray)this._lightData.push(i);this._lightData.end(this._sceneData)}if(n)for(const i of s.skeletons)i.updateBones(this._sceneData);return s}getRenderQueue(e){return this._renderQueueMap.get(e)}_pushToRenderQueue(e,t,n){if(!e.visible)return;e.geometry&&e.material&&e.renderable?e.frustumCulled&&t.frustumCulled?(gi.copy(e.geometry.boundingSphere).applyMatrix4(e.worldMatrix),t.frustum.intersectsSphere(gi)&&n.push(e,t)):n.push(e,t):e.isLight&&n.pushLight(e);const s=e.children;for(let i=0,r=s.length;i<r;i++)this._pushToRenderQueue(s[i],t,n)}}Ts.prototype.isScene=!0;const gi=new yt;class jt extends ge{constructor(){super(),this.viewMatrix=new O,this.projectionMatrix=new O,this.projectionMatrixInverse=new O,this.projectionViewMatrix=new O,this.frustum=new lr,this.gammaFactor=2,this.outputEncoding=he.LINEAR,this.rect=new de(0,0,1,1),this.frustumCulled=!0}lookAt(e,t){Ei.lookAtRH(this.position,e,t),this.quaternion.setFromRotationMatrix(Ei)}setOrtho(e,t,n,s,i,r){this.projectionMatrix.set(2/(t-e),0,0,-(t+e)/(t-e),0,2/(s-n),0,-(s+n)/(s-n),0,0,-2/(r-i),-(r+i)/(r-i),0,0,0,1),this.projectionMatrixInverse.getInverse(this.projectionMatrix)}setPerspective(e,t,n,s){this.projectionMatrix.set(1/(t*Math.tan(e/2)),0,0,0,0,1/Math.tan(e/2),0,0,0,0,-(s+n)/(s-n),-2*s*n/(s-n),0,0,-1,0),this.projectionMatrixInverse.getInverse(this.projectionMatrix)}getWorldDirection(e=new v){return super.getWorldDirection(e).negate()}updateMatrix(e){ge.prototype.updateMatrix.call(this,e),this.viewMatrix.getInverse(this.worldMatrix),this.projectionViewMatrix.multiplyMatrices(this.projectionMatrix,this.viewMatrix),this.frustum.setFromMatrix(this.projectionViewMatrix)}copy(e,t){return ge.prototype.copy.call(this,e,t),this.viewMatrix.copy(e.viewMatrix),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.frustum.copy(e.frustum),this.gammaFactor=e.gammaFactor,this.outputEncoding=e.outputEncoding,this.rect.copy(e.rect),this.frustumCulled=e.frustumCulled,this}}jt.prototype.isCamera=!0;const Ei=new O,An=new yt,Mi=new O,Ut=new hr,Ft=new v,it=new v,st=new v,rt=new v,Ti=new v,Si=new v,Ai=new v,vn=new v,xn=new v,yn=new v,vi=new v,xi=new de,yi=new de,Lr=new v,wi=new O,Ri=new z,Ci=new z,Ni=new z,Li=new v,Bt=new v;class wt extends ge{constructor(e,t){super(),this.geometry=e,this.material=t,this.morphTargetInfluences=null}raycast(e,t){const n=this.geometry,s=this.worldMatrix;if(An.copy(n.boundingSphere),An.applyMatrix4(s),!e.intersectsSphere(An)||(Mi.getInverse(s),Ut.copy(e).applyMatrix4(Mi),!Ut.intersectsBox(n.boundingBox)))return;const i=n.getAttribute("a_Position");if(!i)return;const r=n.getAttribute("a_Uv"),o=n.morphAttributes.position;let c;if(n.index){const l=n.index.buffer.array;for(let h=0;h<l.length;h+=3){const u=l[h],f=l[h+1],d=l[h+2];c=Pi(this,e,Ut,i,o,r,u,f,d),c&&(c.faceIndex=Math.floor(h/3),t.push(c))}}else for(let l=0;l<i.buffer.count;l+=3){const h=l,u=l+1,f=l+2;c=Pi(this,e,Ut,i,o,r,h,u,f),c&&(c.faceIndex=Math.floor(l/3),t.push(c))}}copy(e){return super.copy(e),e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),this}clone(){return new this.constructor(this.geometry,this.material).copy(this)}}wt.prototype.isMesh=!0;function Pi(a,e,t,n,s,i,r,o,c){let l,h,u;l=n.buffer.array,h=n.buffer.stride,u=n.offset,it.fromArray(l,r*h+u),st.fromArray(l,o*h+u),rt.fromArray(l,c*h+u);const f=a.morphTargetInfluences;if(s&&f){vn.set(0,0,0),xn.set(0,0,0),yn.set(0,0,0);for(let p=0;p<s.length;p++){const _=f[p],g=s[p];_!==0&&(l=g.buffer.array,h=g.buffer.stride,u=g.offset,Ti.fromArray(l,r*h+u),Si.fromArray(l,o*h+u),Ai.fromArray(l,c*h+u),vn.addScaledVector(Ti,_),xn.addScaledVector(Si,_),yn.addScaledVector(Ai,_))}it.add(vn),st.add(xn),rt.add(yn)}a.isSkinnedMesh&&(wn(a,r,it),wn(a,o,st),wn(a,c,rt));const d=br(a,e,t,it,st,rt,Li);if(d){i&&(l=i.buffer.array,h=i.buffer.stride,u=i.offset,Ri.fromArray(l,r*h+u),Ci.fromArray(l,o*h+u),Ni.fromArray(l,c*h+u),d.uv=Pr(Li,it,st,rt,Ri,Ci,Ni));const p={a:r,b:o,c,normal:new v};gs.normal(it,st,rt,p.normal),d.face=p}return d}function Pr(a,e,t,n,s,i,r){return gs.barycoordFromPoint(a,e,t,n,Ft),s.multiplyScalar(Ft.x),i.multiplyScalar(Ft.y),r.multiplyScalar(Ft.z),s.add(i).add(r),s.clone()}function br(a,e,t,n,s,i,r){let o;const c=a.material;return c.side===ue.BACK?o=t.intersectTriangle(i,s,n,!0,r):o=t.intersectTriangle(n,s,i,c.side!==ue.DOUBLE,r),o===null?null:(Bt.copy(r),Bt.applyMatrix4(a.worldMatrix),{distance:e.origin.distanceTo(Bt),point:Bt.clone(),object:a})}function wn(a,e,t){const n=a.skeleton,s=a.geometry.attributes.skinIndex,i=a.geometry.attributes.skinWeight;xi.fromArray(s.buffer.array,e*s.size),yi.fromArray(i.buffer.array,e*i.size),vi.copy(t).applyMatrix4(a.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=bi(yi,r);if(o<Number.EPSILON)continue;const c=bi(xi,r);n.bones[c]&&(wi.multiplyMatrices(n.bones[c].worldMatrix,n.boneInverses[c]),t.addScaledVector(Lr.copy(vi).applyMatrix4(wi),o))}return t.applyMatrix4(a.bindMatrixInverse)}function bi(a,e){switch(e){case 0:return a.x;case 1:return a.y;case 2:return a.z;case 3:return a.w;default:throw new Error("index is out of range: "+e)}}class W{constructor(e,t=e.stride,n=0,s=!1){this.buffer=e,this.size=t,this.offset=n,this.normalized=s,this.divisor=0}copy(e){return this.buffer=e.buffer,this.size=e.size,this.offset=e.offset,this.normalized=e.normalized,this.divisor=e.divisor,this}clone(e){let t;return e?(e.has(this.buffer)||e.set(this.buffer,this.buffer.clone()),t=new W(e.get(this.buffer),this.size,this.offset,this.normalized),t.divisor=this.divisor,t):(console.warn("t3d.Attribute.clone(): now requires a WeakMap as an argument to save shared buffers."),t=new W(this.buffer.clone(),this.size,this.offset,this.normalized),t.divisor=this.divisor,t)}}let ee=class Ss{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tr.STATIC_DRAW,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}copy(e){return this.array=new e.array.constructor(e.array),this.stride=e.stride,this.count=e.array.length/this.stride,this.usage=e.usage,this}clone(){const e=new this.array.constructor(this.array),t=new Ss(e,this.stride);return t.usage=this.usage,t}},Dr=0;const me=new v,Gt=new v,Di=new v,we=new ft,Rn=new ft;class pt extends xt{constructor(){super(),this.id=Dr++,this.uuid=$n(),this.attributes={},this.morphAttributes={},this.index=null,this.boundingBox=new ft,this.boundingSphere=new yt,this.groups=[],this.instanceCount=-1,this.version=0}addAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}removeAttribute(e){delete this.attributes[e]}setIndex(e){if(Array.isArray(e)){const t=new(Ir(e)>65535?Uint32Array:Uint16Array)(e);this.index=new W(new ee(t,1))}else this.index=e}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}computeBoundingBox(){const e=this.attributes.a_Position||this.attributes.position;e&&this.boundingBox.setFromArray(e.buffer.array,e.buffer.stride,e.offset);const t=this.morphAttributes.position;if(t)for(let n=0;n<t.length;n++){const s=t[n];we.setFromArray(s.buffer.array,s.buffer.stride,s.offset),me.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(me)}}computeBoundingSphere(){const e=this.attributes.a_Position||this.attributes.position,t=this.morphAttributes.position;if(!e)return;const n=e.buffer.stride,s=e.offset;if(t){we.setFromArray(e.buffer.array,n,s);for(let o=0;o<t.length;o++){const c=t[o];Rn.setFromArray(c.buffer.array,c.buffer.stride,c.offset),me.addVectors(we.min,Rn.min),we.expandByPoint(me),me.addVectors(we.max,Rn.max),we.expandByPoint(me)}const i=this.boundingSphere.center;we.getCenter(i);let r=0;for(let o=0;o<e.buffer.count;o++){Gt.fromArray(e.buffer.array,o*n+s),r=i.distanceToSquared(Gt);for(let c=0;c<t.length;c++){const l=t[c];me.fromArray(l.buffer.array,o*l.buffer.stride+l.offset),Di.addVectors(Gt,me);const h=i.distanceToSquared(Di);h>r&&(r=h,Gt.add(me))}}this.boundingSphere.radius=Math.sqrt(r)}else this.boundingSphere.setFromArray(e.buffer.array,n,s)}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){let t,n,s;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[];const i=new WeakMap,r=e.index;r!==null&&this.setIndex(r.clone(i));const o=e.attributes;for(t in o){const h=o[t];this.addAttribute(t,h.clone(i))}const c=e.morphAttributes;for(t in c){const h=[],u=c[t];for(n=0,s=u.length;n<s;n++)h.push(u[n].clone(i));this.morphAttributes[t]=h}const l=e.groups;for(n=0,s=l.length;n<s;n++){const h=l[n];this.addGroup(h.start,h.count,h.materialIndex)}return this.boundingBox.copy(e.boundingBox),this.boundingSphere.copy(e.boundingSphere),this.instanceCount=e.instanceCount,this}clone(){return new pt().copy(this)}}function Ir(a){if(a.length===0)return-1/0;let e=a[0];for(let t=1,n=a.length;t<n;++t)a[t]>e&&(e=a[t]);return e}class Or extends pt{constructor(e=1,t=1,n=1,s=1){super();const i=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c;let d,p;const _=[],g=[],m=[],A=[];for(p=0;p<h;p++){const E=p*f-r;for(d=0;d<l;d++){const M=d*u-i;g.push(M,0,E),m.push(0,1,0),A.push(d/o),A.push(1-p/c)}}for(p=0;p<c;p++)for(d=0;d<o;d++){const E=d+l*p,M=d+l*(p+1),S=d+1+l*(p+1),w=d+1+l*p;_.push(E,M,w),_.push(M,S,w)}this.setIndex(new W(new ee(g.length/3>65536?new Uint32Array(_):new Uint16Array(_),1))),this.addAttribute("a_Position",new W(new ee(new Float32Array(g),3))),this.addAttribute("a_Normal",new W(new ee(new Float32Array(m),3))),this.addAttribute("a_Uv",new W(new ee(new Float32Array(A),2))),this.computeBoundingBox(),this.computeBoundingSphere()}}let Ur=0;class _t extends xt{constructor(){super(),this.id=Ur++,this.uuid=$n(),this.type=Ue.SHADER,this.shaderName="",this.defines={},this.uniforms={},this.vertexShader="",this.fragmentShader="",this.precision=null,this.transparent=!1,this.blending=ve.NORMAL,this.blendSrc=re.SRC_ALPHA,this.blendDst=re.ONE_MINUS_SRC_ALPHA,this.blendEquation=Ae.ADD,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.premultipliedAlpha=!1,this.vertexColors=Ve.NONE,this.vertexTangents=!1,this.opacity=1,this.diffuse=new Xe(16777215),this.diffuseMap=null,this.diffuseMapCoord=0,this.diffuseMapTransform=new ke,this.alphaMap=null,this.alphaMapCoord=0,this.alphaMapTransform=new ke,this.emissive=new Xe(0),this.emissiveMap=null,this.emissiveMapCoord=0,this.emissiveMapTransform=new ke,this.aoMap=null,this.aoMapIntensity=1,this.aoMapCoord=0,this.aoMapTransform=new ke,this.normalMap=null,this.normalScale=new z(1,1),this.bumpMap=null,this.bumpScale=1,this.envMap=null,this.envMapIntensity=1,this.envMapCombine=er.MULTIPLY,this.depthFunc=ht.LEQUAL,this.depthTest=!0,this.depthWrite=!0,this.colorWrite=!0,this.stencilTest=!1,this.stencilWriteMask=255,this.stencilFunc=ht.ALWAYS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rn.KEEP,this.stencilZFail=rn.KEEP,this.stencilZPass=rn.KEEP,this.stencilFuncBack=null,this.stencilRefBack=null,this.stencilFuncMaskBack=null,this.stencilFailBack=null,this.stencilZFailBack=null,this.stencilZPassBack=null,this.clippingPlanes=null,this.alphaTest=0,this.alphaToCoverage=!1,this.side=ue.FRONT,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.shading=ct.SMOOTH_SHADING,this.dithering=!1,this.acceptLight=!1,this.fog=!0,this.drawMode=ps.TRIANGLES,this.forceUpdateUniforms=!0,this.needsUpdate=!0}copy(e){return this.shaderName=e.shaderName,this.defines=Object.assign({},e.defines),this.uniforms=Es(e.uniforms),this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader,this.precision=e.precision,this.transparent=e.transparent,this.blending=e.blending,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.premultipliedAlpha=e.premultipliedAlpha,this.vertexColors=e.vertexColors,this.vertexTangents=e.vertexTangents,this.opacity=e.opacity,this.diffuse.copy(e.diffuse),this.diffuseMap=e.diffuseMap,this.diffuseMapCoord=e.diffuseMapCoord,this.diffuseMapTransform.copy(e.diffuseMapTransform),this.alphaMap=e.alphaMap,this.alphaMapCoord=e.alphaMapCoord,this.alphaMapTransform.copy(e.alphaMapTransform),this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveMapCoord=e.emissiveMapCoord,this.emissiveMapTransform.copy(e.emissiveMapTransform),this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.aoMapCoord=e.aoMapCoord,this.aoMapTransform.copy(e.aoMapTransform),this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.envMapCombine=e.envMapCombine,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.stencilTest=e.stencilTest,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilFuncBack=e.stencilFuncBack,this.stencilRefBack=e.stencilRefBack,this.stencilFuncMaskBack=e.stencilFuncMaskBack,this.stencilFailBack=e.stencilFailBack,this.stencilZFailBack=e.stencilZFailBack,this.stencilZPassBack=e.stencilZPassBack,this.clippingPlanes=e.clippingPlanes,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.side=e.side,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.shading=e.shading,this.dithering=e.dithering,this.acceptLight=e.acceptLight,this.fog=e.fog,this.drawMode=e.drawMode,this}clone(){return new this.constructor().copy(this)}dispose(){this.dispatchEvent({type:"dispose"})}}class Rt extends _t{constructor(e){super(),e&&(this.shaderName=e.name,Object.assign(this.defines,e.defines),this.uniforms=Es(e.uniforms),this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader)}}class qt{constructor(e){const t=new Ts,n=this.camera=new jt;n.frustumCulled=!1,n.position.set(0,1,0),n.lookAt(new v(0,0,0),new v(0,0,-1)),n.setOrtho(-1,1,-1,1,.1,2),t.add(n);const s=this.geometry=new Or(2,2,1,1),i=this.material=new Rt(e);this.uniforms=i.uniforms;const r=new wt(s,i);r.frustumCulled=!1,t.add(r),t.updateMatrix(),this.renderStates=t.updateRenderStates(n);const o=t.updateRenderQueue(n,!1,!1);this.renderQueueLayer=o.layerList[0],this.renderConfig={}}render(e){e.beginRender(),e.renderRenderableList(this.renderQueueLayer.opaque,this.renderStates,this.renderConfig),e.endRender()}dispose(){this.geometry.dispose(),this.material.dispose()}}class Fe{constructor(e){this._key=e+"$",this._count=0}get(e){const t=this._key;let n=e[t];return n===void 0&&(n={},e[t]=n,this._count++),n}delete(e){const t=this._key;e[t]&&(this._count--,delete e[t])}size(){return this._count}}let Ii=0;class Fr{constructor(e){this.id=Ii++,this.context=e,this.capabilities={},this.shaderCompileOptions={checkErrors:!0,compileAsynchronously:!1},this._passInfo={enabled:!1,count:0}}beginRender(){this._passInfo.enabled=!0}endRender(){this._passInfo.enabled=!1,this._passInfo.count++}renderRenderableItem(e,t,n){}renderRenderableList(e,t,n={}){for(let s=0,i=e.length;s<i;s++)this.renderRenderableItem(e[s],t,n)}renderScene(e,t,n={}){const s=e.getRenderStates(t),i=e.getRenderQueue(t);this.beginRender();let r;for(let o=0,c=i.layerList.length;o<c;o++)r=i.layerList[o],this.renderRenderableList(r.opaque,s,n),this.renderRenderableList(r.transparent,s,n);this.endRender()}clear(e,t,n){}setClearColor(e,t,n,s,i){}getClearColor(){}setRenderTarget(e){}getRenderTarget(){}blitRenderTarget(e,t,n=!0,s=!0,i=!0){}readRenderTargetPixels(e,t,n,s,i){}updateRenderTargetMipmap(e){}setTextureExternal(e,t){}setRenderBufferExternal(e,t){}setBufferExternal(e,t){}resetVertexArrayBindings(e){}resetState(){}beginQuery(e,t){}endQuery(e){}queryCounter(e){}isTimerQueryDisjoint(e){}isQueryResultAvailable(e){}getQueryResult(e){}increaseId(){return this.id=Ii++,this.id}}class Br extends pt{constructor(e=1,t=1,n=1,s=1,i=1,r=1){super();const o=this;s=Math.floor(s),i=Math.floor(i),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,r,i,0),p("z","y","x",1,-1,n,t,-e,r,i,1),p("x","z","y",1,1,e,n,t,s,r,2),p("x","z","y",1,-1,e,n,-t,s,r,3),p("x","y","z",1,-1,e,t,n,s,i,4),p("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(new W(new ee(l.length/3>65536?new Uint32Array(c):new Uint16Array(c),1))),this.addAttribute("a_Position",new W(new ee(new Float32Array(l),3))),this.addAttribute("a_Normal",new W(new ee(new Float32Array(h),3))),this.addAttribute("a_Uv",new W(new ee(new Float32Array(u),2)));function p(_,g,m,A,E,M,S,w,N,U,D){const Y=M/N,F=S/U,C=M/2,P=S/2,j=w/2,H=N+1,pe=U+1;let oe=0,$=0;const G=new v;for(let I=0;I<pe;I++){const B=I*F-P;for(let Te=0;Te<H;Te++){const Q=Te*Y-C;G[_]=Q*A,G[g]=B*E,G[m]=j,l.push(G.x,G.y,G.z),G[_]=0,G[g]=0,G[m]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(Te/N),u.push(1-I/U),oe+=1}}for(let I=0;I<U;I++)for(let B=0;B<N;B++){const Te=f+B+H*I,Q=f+B+H*(I+1),Ce=f+(B+1)+H*(I+1),Se=f+(B+1)+H*I;c.push(Te,Q,Se),c.push(Q,Ce,Se),$+=6}o.addGroup(d,$,D),d+=$,f+=oe}this.computeBoundingBox(),this.computeBoundingSphere()}}class xl extends pt{constructor(e=1,t=8,n=6,s=0,i=Math.PI*2,r=0,o=Math.PI){super(),t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=r+o;let l,h,u=0;const f=[],d=new v,p=new v,_=[],g=[],m=[],A=[];for(h=0;h<=n;h++){const E=[],M=h/n;let S=0;for(h==0&&r==0?S=.5/t:h==n&&c==Math.PI&&(S=-.5/t),l=0;l<=t;l++){const w=l/t;d.x=-e*Math.cos(s+w*i)*Math.sin(r+M*o),d.y=e*Math.cos(r+M*o),d.z=e*Math.sin(s+w*i)*Math.sin(r+M*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),m.push(p.x,p.y,p.z),A.push(w+S,1-M),E.push(u++)}f.push(E)}for(h=0;h<n;h++)for(l=0;l<t;l++){const E=f[h][l+1],M=f[h][l],S=f[h+1][l],w=f[h+1][l+1];(h!==0||r>0)&&_.push(E,M,w),(h!==n-1||c<Math.PI)&&_.push(M,S,w)}this.setIndex(new W(new ee(g.length/3>65536?new Uint32Array(_):new Uint16Array(_),1))),this.addAttribute("a_Position",new W(new ee(new Float32Array(g),3))),this.addAttribute("a_Normal",new W(new ee(new Float32Array(m),3))),this.addAttribute("a_Uv",new W(new ee(new Float32Array(A),2))),this.computeBoundingBox(),this.computeBoundingSphere()}}class As extends _t{constructor(){super(),this.type=Ue.BASIC}}class Gr extends _t{constructor(){super(),this.type=Ue.PBR2,this.specular=new Xe(1118481),this.glossiness=.5,this.specularMap=null,this.glossinessMap=null,this.acceptLight=!0}copy(e){return super.copy(e),this.specular=e.specular,this.glossiness=e.glossiness,this.specularMap=e.specularMap,this.glossinessMap=e.glossinessMap,this}}class Jn extends _t{constructor(){super(),this.type=Ue.PBR,this.roughness=.5,this.metalness=.5,this.roughnessMap=null,this.metalnessMap=null,this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.acceptLight=!0}copy(e){return super.copy(e),this.roughness=e.roughness,this.metalness=e.metalness,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this}}class zr extends _t{constructor(){super(),this.type=Ue.POINT,this.size=1,this.sizeAttenuation=!0,this.drawMode=ps.POINTS}copy(e){return super.copy(e),this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}class Zt extends xt{constructor(e,t){super(),this.width=e,this.height=t}resize(e,t){return this.width!==e||this.height!==t?(this.width=e,this.height=t,!0):!1}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.prototype.isRenderTarget=!0;class le extends xt{constructor(e,t,n=x.RGBA8,s=0){super(),this.width=e,this.height=t,this.format=n,this.multipleSampling=s}resize(e,t){return this.width!==e||this.height!==t?(this.dispose(),this.width=e,this.height=t,!0):!1}clone(){return new this.constructor().copy(this)}copy(e){return this.format=e.format,this.multipleSampling=e.multipleSampling,this}dispose(){this.dispatchEvent({type:"dispose"})}}le.prototype.isRenderBuffer=!0;let Hr=0;class $t extends xt{constructor(){super(),this.id=Hr++,this.mipmaps=[],this.border=0,this.format=x.RGBA,this.internalformat=null,this.type=b.UNSIGNED_BYTE,this.magFilter=R.LINEAR,this.minFilter=R.LINEAR_MIPMAP_LINEAR,this.wrapS=q.CLAMP_TO_EDGE,this.wrapT=q.CLAMP_TO_EDGE,this.anisotropy=1,this.compare=void 0,this.generateMipmaps=!0,this.encoding=he.LINEAR,this.flipY=!0,this.premultiplyAlpha=!1,this.unpackAlignment=4,this.version=0}clone(){return new this.constructor().copy(this)}copy(e){return this.mipmaps=e.mipmaps.slice(0),this.border=e.border,this.format=e.format,this.internalformat=e.internalformat,this.type=e.type,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.anisotropy=e.anisotropy,this.compare=e.compare,this.generateMipmaps=e.generateMipmaps,this.encoding=e.encoding,this.flipY=e.flipY,this.premultiplyAlpha=e.premultiplyAlpha,this.unpackAlignment=e.unpackAlignment,this.version=e.version,this}dispose(){this.dispatchEvent({type:"dispose"}),this.version=0}}$t.prototype.isTexture=!0;class Me extends $t{constructor(){super(),this.image=null}copy(e){return super.copy(e),this.image=e.image,this}}Me.prototype.isTexture2D=!0;class fe extends Zt{constructor(e,t){super(e,t),this._attachments={},this.attach(new Me,y.COLOR_ATTACHMENT0),this.attach(new le(e,t,x.DEPTH_STENCIL),y.DEPTH_STENCIL_ATTACHMENT)}attach(e,t=y.COLOR_ATTACHMENT0){e.isTexture?e.image&&e.image.rtt?(e.image.width!==this.width||e.image.height!==this.height)&&(e.version++,e.image.width=this.width,e.image.height=this.height):(e.version++,e.image={rtt:!0,data:null,width:this.width,height:this.height}):e.resize(this.width,this.height),this._attachments[t]=e}detach(e=y.COLOR_ATTACHMENT0){delete this._attachments[e]}resize(e,t){const n=super.resize(e,t);if(n){this.dispose(!1);for(const s in this._attachments){const i=this._attachments[s];i.isTexture?(i.image={rtt:!0,data:null,width:this.width,height:this.height},i.version++):i.resize(e,t)}}return n}dispose(e=!0){if(super.dispose(),e)for(const t in this._attachments)this._attachments[t].dispose()}}fe.prototype.isRenderTarget2D=!0;Object.defineProperties(fe.prototype,{texture:{set:function(a){a?a.isTexture&&this.attach(a,y.COLOR_ATTACHMENT0):this.detach(y.COLOR_ATTACHMENT0)},get:function(){const a=this._attachments[y.COLOR_ATTACHMENT0];return a.isTexture?a:null}}});class Vr extends Zt{constructor(e){super(e.width,e.height),this.view=e}resize(e,t){this.view.width=e,this.view.height=t,this.width=e,this.height=t}dispose(){}}Vr.prototype.isRenderTargetBack=!0;class ei extends $t{constructor(){super(),this.images=[],this.flipY=!1}copy(e){return super.copy(e),this.images=e.images.slice(0),this}}ei.prototype.isTextureCube=!0;class ti extends Zt{constructor(e,t){super(e,t),this._attachments={},this.attach(new ei,y.COLOR_ATTACHMENT0),this.attach(new le(e,t,x.DEPTH_STENCIL),y.DEPTH_STENCIL_ATTACHMENT),this.activeCubeFace=0,this.activeMipmapLevel=0}attach(e,t=y.COLOR_ATTACHMENT0){if(e.isTexture){let n=!1;for(let s=0;s<6;s++)e.images[s]&&e.images[s].rtt?(e.images[s].width!==this.width||e.images[s].height!==this.height)&&(e.images[s].width=this.width,e.images[s].height=this.height,n=!0):(e.images[s]={rtt:!0,data:null,width:this.width,height:this.height},n=!0);n&&e.version++}else e.resize(this.width,this.height);this._attachments[t]=e}detach(e=y.COLOR_ATTACHMENT0){delete this._attachments[e]}resize(e,t){if(super.resize(e,t)){this.dispose(!1);for(const s in this._attachments){const i=this._attachments[s];if(i.isTexture){for(let r=0;r<6;r++)i.images[r]={rtt:!0,data:null,width:this.width,height:this.height};i.version++}else i.resize(e,t)}}}dispose(e=!0){if(super.dispose(),e)for(const t in this._attachments)this._attachments[t].dispose()}}ti.prototype.isRenderTargetCube=!0;Object.defineProperties(ti.prototype,{texture:{set:function(a){a?a.isTexture&&this.attach(a,y.COLOR_ATTACHMENT0):this.detach(y.COLOR_ATTACHMENT0)},get:function(){const a=this._attachments[y.COLOR_ATTACHMENT0];return a.isTexture?a:null}}});class vs extends $t{constructor(){super(),this.image={data:new Uint8Array([255,255,255,255,255,255,255,255]),width:2,height:2,depth:2},this.wrapR=q.CLAMP_TO_EDGE,this.format=x.RED,this.type=b.UNSIGNED_BYTE,this.magFilter=R.NEAREST,this.minFilter=R.NEAREST,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.image=e.image,this}}vs.prototype.isTexture3D=!0;const Cn=new O;class ni{constructor(e,t){this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=new Float32Array(16*this.bones.length),this.boneTexture=void 0}pose(){const e=this.boneInverses;for(let t=0;t<this.bones.length;t++)this.bones[t].worldMatrix.getInverse(e[t]);for(let t=0;t<this.bones.length;t++){const n=this.bones[t];n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.worldMatrix),n.matrix.multiply(n.worldMatrix)):n.matrix.copy(n.worldMatrix),n.matrix.decompose(n.position,n.quaternion,n.scale)}}clone(){return new ni(this.bones,this.boneInverses)}updateBones(e){const t=e.useAnchorMatrix,n=e.anchorMatrixInverse,s=this.boneInverses;for(let i=0;i<this.bones.length;i++){const r=this.bones[i];Cn.multiplyMatrices(r.worldMatrix,s[i]),t&&Cn.premultiply(n),Cn.toArray(this.boneMatrices,i*16)}this.boneTexture!==void 0&&this.boneTexture.version++}generateBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=fr(Math.ceil(e)),e=Math.max(4,e);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Me;n.image={data:t,width:e,height:e},n.format=x.RGBA,n.type=b.FLOAT,n.magFilter=R.NEAREST,n.minFilter=R.NEAREST,n.generateMipmaps=!1,n.flipY=!1,this.boneMatrices=t,this.boneTexture=n}}class Qe extends ge{constructor(e=16777215,t=1){super(),this.color=new Xe(e),this.intensity=t}lookAt(e,t){Oi.lookAtRH(this.position,e,t),this.quaternion.setFromRotationMatrix(Oi)}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}}Qe.prototype.isLight=!0;const Oi=new O;class kr extends Qe{constructor(e,t){super(e,t)}}kr.prototype.isAmbientLight=!0;class ii{constructor(){this.camera=new jt,this.matrix=new O,this.bias=0,this.normalBias=0,this.radius=1,this.cameraNear=1,this.cameraFar=500,this.mapSize=new z(512,512),this.autoUpdate=!0,this.needsUpdate=!1,this.renderTarget=null,this.map=null,this.depthMap=null}update(e,t){}updateMatrix(){const e=this.matrix,t=this.camera;e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(t.projectionMatrix),e.multiply(t.viewMatrix)}copy(e){return this.camera.copy(e.camera),this.matrix.copy(e.matrix),this.bias=e.bias,this.normalBias=e.normalBias,this.radius=e.radius,this.cameraNear=e.cameraNear,this.cameraFar=e.cameraFar,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}prepareDepthMap(e,t){}}class Wr extends ii{constructor(){super(),this.windowSize=500,this.frustumEdgeFalloff=0,this.camera.frustumCulled=!1,this.renderTarget=new fe(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=R.NEAREST,e.magFilter=R.NEAREST;const t=new Me;t.type=b.UNSIGNED_INT,t.format=x.DEPTH_COMPONENT,t.magFilter=R.LINEAR,t.minFilter=R.LINEAR,t.compare=ht.LESS,t.generateMipmaps=!1;const n=new le(this.mapSize.x,this.mapSize.y,x.DEPTH_COMPONENT16);this.renderTarget.detach(y.DEPTH_STENCIL_ATTACHMENT),this.renderTarget.attach(n,y.DEPTH_ATTACHMENT),this.map=e,this.depthMap=t,this._depthBuffer=n,this._lookTarget=new v,this._up=new v(0,1,0)}update(e){this._updateCamera(e),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e){const t=this.camera,n=this._lookTarget;e.getWorldDirection(n),t.position.setFromMatrixPosition(e.worldMatrix),n.multiplyScalar(-1).add(t.position),t.lookAt(n,this._up),t.updateMatrix();const s=this.windowSize/2;t.setOrtho(-s,s,-s,s,this.cameraNear,this.cameraFar)}copy(e){return super.copy(e),this.windowSize=e.windowSize,this.frustumEdgeFalloff=e.frustumEdgeFalloff,this}prepareDepthMap(e,t){const n=e&&t.version>=2,s=this.renderTarget,r=s._attachments[y.DEPTH_ATTACHMENT]===this.depthMap;n!==r&&(n?(t.getExtension("OES_texture_float_linear")&&(this.depthMap.type=b.FLOAT),s.dispose(),s.attach(this.depthMap,y.DEPTH_ATTACHMENT)):(s.dispose(),s.attach(this._depthBuffer,y.DEPTH_ATTACHMENT)))}}class xs extends Qe{constructor(e,t){super(e,t),this.shadow=new Wr}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}xs.prototype.isDirectionalLight=!0;class Xr extends Qe{constructor(e,t,n){super(e,n),this.groundColor=new Xe(t!==void 0?t:16777215)}copy(e){super.copy(e),this.groundColor.copy(e.groundColor)}}Xr.prototype.isHemisphereLight=!0;class qr extends ii{constructor(){super(),this.renderTarget=new ti(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=R.NEAREST,e.magFilter=R.NEAREST,this.map=e,this._targets=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],this._ups=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],this._lookTarget=new v}update(e,t){this._updateCamera(e,t),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e,t){const n=this.camera,s=this._lookTarget,i=this._targets,r=this._ups;n.position.setFromMatrixPosition(e.worldMatrix),s.set(i[t].x+n.position.x,i[t].y+n.position.y,i[t].z+n.position.z),n.lookAt(s,r[t]),n.updateMatrix(),n.setPerspective(90/180*Math.PI,1,this.cameraNear,this.cameraFar)}}class ys extends Qe{constructor(e,t,n,s){super(e,t),this.decay=s!==void 0?s:1,this.distance=n!==void 0?n:200,this.shadow=new qr}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}ys.prototype.isPointLight=!0;class Yr extends Qe{constructor(e=new dr,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}}Yr.prototype.isSphericalHarmonicsLight=!0;class Qr extends ii{constructor(){super(),this.frustumEdgeFalloff=0,this.renderTarget=new fe(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=R.NEAREST,e.magFilter=R.NEAREST;const t=new Me;t.type=b.UNSIGNED_INT,t.format=x.DEPTH_COMPONENT,t.magFilter=R.LINEAR,t.minFilter=R.LINEAR,t.compare=ht.LESS,t.generateMipmaps=!1;const n=new le(this.mapSize.x,this.mapSize.y,x.DEPTH_COMPONENT16);this.renderTarget.detach(y.DEPTH_STENCIL_ATTACHMENT),this.renderTarget.attach(n,y.DEPTH_ATTACHMENT),this.map=e,this.depthMap=t,this._depthBuffer=n,this._lookTarget=new v,this._up=new v(0,1,0)}update(e){this._updateCamera(e),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e){const t=this.camera,n=this._lookTarget;e.getWorldDirection(n),t.position.setFromMatrixPosition(e.worldMatrix),n.multiplyScalar(-1).add(t.position),t.lookAt(n,this._up),t.updateMatrix(),t.setPerspective(e.angle*2,1,this.cameraNear,this.cameraFar)}copy(e){return super.copy(e),this.frustumEdgeFalloff=e.frustumEdgeFalloff,this}prepareDepthMap(e,t){const n=e&&t.version>=2,s=this.renderTarget,r=s._attachments[y.DEPTH_ATTACHMENT]===this.depthMap;n!==r&&(n?(t.getExtension("OES_texture_float_linear")&&(this.depthMap.type=b.FLOAT),s.dispose(),s.attach(this.depthMap,y.DEPTH_ATTACHMENT)):(s.dispose(),s.attach(this._depthBuffer,y.DEPTH_ATTACHMENT)))}}class ws extends Qe{constructor(e,t,n,s,i,r){super(e,t),this.decay=r!==void 0?r:1,this.distance=n!==void 0?n:200,this.penumbra=i!==void 0?i:0,this.angle=s!==void 0?s:Math.PI/6,this.shadow=new Qr}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}ws.prototype.isSpotLight=!0;class Rs extends ge{constructor(){super()}}Rs.prototype.isBone=!0;class Cs extends wt{constructor(e,t){super(e,t),this.skeleton=void 0,this.bindMode="attached",this.bindMatrix=new O,this.bindMatrixInverse=new O}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrix(),t=this.worldMatrix),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)}updateMatrix(e){super.updateMatrix(e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.worldMatrix):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("t3d.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}}Cs.prototype.isSkinnedMesh=!0;var Kr=`#ifdef ALPHATEST
	if ( outColor.a < ALPHATEST ) {
		discard;
	} else {
		outColor.a = u_Opacity;
	}
#endif`,jr=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
	varying vec2 vAOMapUV;
#endif`,Zr=`#ifdef USE_AOMAP
	uniform mat3 aoMapUVTransform;
	varying vec2 vAOMapUV;
#endif`,$r=`#ifdef USE_AOMAP
	#if (USE_AOMAP == 2)
        vAOMapUV = (aoMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vAOMapUV = (aoMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,Jr=`
#ifdef USE_AOMAP
    float ambientOcclusion = (texture2D(aoMap, vAOMapUV).r - 1.0) * aoMapIntensity + 1.0;
    
    reflectedLight.indirectDiffuse *= ambientOcclusion;
    #if defined(USE_ENV_MAP) && defined(USE_PBR)
        float dotNV = saturate(dot(N, V));
        reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, ambientOcclusion, roughness);
    #endif
#endif`,ea="vec4 outColor = vec4(u_Color, u_Opacity);",ta=`vec3 transformed = vec3(a_Position);
vec3 objectNormal = vec3(a_Normal);
#ifdef USE_TANGENT
    vec3 objectTangent = vec3(a_Tangent.xyz);
#endif`,na=`
vec3 BRDF_Diffuse_Lambert(vec3 diffuseColor) {
    return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick(const in vec3 specularColor, const in float dotLH) {
	float fresnel = exp2((-5.55473 * dotLH - 6.98316) * dotLH);
	return (1.0 - specularColor) * fresnel + specularColor;
}
float D_BlinnPhong(const in float shininess, const in float dotNH) {
	return RECIPROCAL_PI * (shininess * 0.5 + 1.0) * pow(dotNH, shininess);
}
float G_BlinnPhong_Implicit() {
	return 0.25;
}
vec3 BRDF_Specular_BlinnPhong(vec3 specularColor, vec3 N, vec3 L, vec3 V, float shininess) {
    vec3 H = normalize(L + V);
    float dotNH = saturate(dot(N, H));
    float dotLH = saturate(dot(L, H));
    vec3 F = F_Schlick(specularColor, dotLH);
    float G = G_BlinnPhong_Implicit();
    float D = D_BlinnPhong(shininess, dotNH);
    return F * G * D;
}
float D_GGX(const in float alpha, const in float dotNH) {
	float a2 = pow2(alpha);
	float denom = pow2(dotNH) * (a2 - 1.0) + 1.0;	return RECIPROCAL_PI * a2 / pow2(denom);
}
float G_GGX_SmithCorrelated(const in float alpha, const in float dotNL, const in float dotNV) {
	float a2 = pow2(alpha);
	float gv = dotNL * sqrt(a2 + (1.0 - a2) * pow2(dotNV));
	float gl = dotNV * sqrt(a2 + (1.0 - a2) * pow2(dotNL));
	return 0.5 / max(gv + gl, EPSILON);
}
vec3 BRDF_Specular_GGX(vec3 specularColor, vec3 N, vec3 L, vec3 V, float roughness) {
	float alpha = pow2(roughness);
	vec3 H = normalize(L + V);
	float dotNL = saturate(dot(N, L));
	float dotNV = saturate(dot(N, V));
	float dotNH = saturate(dot(N, H));
	float dotLH = saturate(dot(L, H));
	vec3 F = F_Schlick(specularColor, dotLH);
	float G = G_GGX_SmithCorrelated(alpha, dotNL, dotNV);
	float D = D_GGX(alpha, dotNH);
	return F * G * D;
}
vec2 integrateSpecularBRDF(const in float dotNV, const in float roughness) {
	const vec4 c0 = vec4(-1, -0.0275, -0.572, 0.022);
	const vec4 c1 = vec4(1, 0.0425, 1.04, -0.04);
	vec4 r = roughness * c0 + c1;
	float a004 = min(r.x * r.x, exp2(-9.28 * dotNV)) * r.x + r.y;
	return vec2(-1.04, 1.04) * a004 + r.zw;
}
vec3 F_Schlick_RoughnessDependent(const in vec3 F0, const in float dotNV, const in float roughness) {
	float fresnel = exp2((-5.55473 * dotNV - 6.98316) * dotNV);
	vec3 Fr = max(vec3(1.0 - roughness), F0) - F0;
	return Fr * fresnel + F0;
}
vec3 BRDF_Specular_GGX_Environment(const in vec3 N, const in vec3 V, const in vec3 specularColor, const in float roughness) {
	float dotNV = saturate(dot(N, V));
	vec2 brdf = integrateSpecularBRDF(dotNV, roughness);
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment(const in vec3 N, const in vec3 V, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
	float dotNV = saturate(dot(N, V));
	vec3 F = F_Schlick_RoughnessDependent(specularColor, dotNV, roughness);
	vec2 brdf = integrateSpecularBRDF(dotNV, roughness);
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + (1.0 - specularColor) * 0.047619;	vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}`,ia=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd(vec2 uv) {
		vec2 dSTdx = dFdx( uv );
		vec2 dSTdy = dFdy( uv );
		float Hll = bumpScale * texture2D( bumpMap, uv ).x;
		float dBx = bumpScale * texture2D( bumpMap, uv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, uv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sa=`
#if NUM_CLIPPING_PLANES > 0
    vec4 plane;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {
        plane = clippingPlanes[i];
        if ( dot( -v_modelPos, plane.xyz ) > plane.w ) discard;
    }
    #pragma unroll_loop_end
#endif`,ra=`#if NUM_CLIPPING_PLANES > 0
    uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aa=`#ifdef USE_VCOLOR_RGB
    outColor.rgb *= v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    outColor *= v_Color;
#endif`,oa=`#ifdef USE_VCOLOR_RGB
    varying vec3 v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    varying vec4 v_Color;
#endif`,ca=`#ifdef USE_VCOLOR_RGB
    attribute vec3 a_Color;
    varying vec3 v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    attribute vec4 a_Color;
    varying vec4 v_Color;
#endif`,la=`#if defined(USE_VCOLOR_RGB) || defined(USE_VCOLOR_RGBA)
    v_Color = a_Color;
#endif`,ha=`uniform mat4 u_View;
uniform float u_Opacity;
uniform vec3 u_Color;
uniform vec3 u_CameraPosition;
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};`,ua=`attribute vec3 a_Position;
attribute vec3 a_Normal;
#ifdef USE_TANGENT
	attribute vec4 a_Tangent;
#endif
#include <transpose>
#include <inverse>
uniform mat4 u_Projection;
uniform mat4 u_View;
uniform mat4 u_Model;
uniform mat4 u_ProjectionView;
uniform vec3 u_CameraPosition;
#define EPSILON 1e-6
#ifdef USE_MORPHTARGETS
    attribute vec3 morphTarget0;
    attribute vec3 morphTarget1;
    attribute vec3 morphTarget2;
    attribute vec3 morphTarget3;
    #ifdef USE_MORPHNORMALS
    	attribute vec3 morphNormal0;
    	attribute vec3 morphNormal1;
    	attribute vec3 morphNormal2;
    	attribute vec3 morphNormal3;
    #else
    	attribute vec3 morphTarget4;
    	attribute vec3 morphTarget5;
    	attribute vec3 morphTarget6;
    	attribute vec3 morphTarget7;
    #endif
#endif
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}`,da=`#ifdef USE_DIFFUSE_MAP
    #if (USE_DIFFUSE_MAP == 2)
        vec4 texelColor = texture2D(diffuseMap, v_Uv2);
    #else 
        vec4 texelColor = texture2D(diffuseMap, v_Uv);
    #endif
    
    texelColor = mapTexelToLinear(texelColor);
    outColor *= texelColor;
#endif`,fa=`#ifdef USE_DIFFUSE_MAP
    uniform sampler2D diffuseMap;
#endif`,pa=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = emissiveMapTexelToLinear(texture2D(emissiveMap, vEmissiveMapUV));
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_a=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
	varying vec2 vEmissiveMapUV;
#endif`,ma=`#ifdef USE_EMISSIVEMAP
	#if (USE_EMISSIVEMAP == 2)
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,ga=`#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapUVTransform;
	varying vec2 vEmissiveMapUV;
#endif`,Ea="gl_FragColor = linearToOutputTexel(gl_FragColor);",Ma=`vec4 LinearToLinear(in vec4 value) {
	return value;
}
vec4 GammaToLinear(in vec4 value, in float gammaFactor) {
	return vec4(pow(value.xyz, vec3(gammaFactor)), value.w);
}
vec4 LinearToGamma(in vec4 value, in float gammaFactor) {
	return vec4(pow(value.xyz, vec3(1.0 / gammaFactor)), value.w);
}
vec4 sRGBToLinear(in vec4 value) {
	return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 LinearTosRGB(in vec4 value) {
	return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}`,Ta="gl_FragColor = outColor;",Sa=`#ifdef USE_ENV_MAP
    vec3 envDir;
    #ifdef USE_VERTEX_ENVDIR
        envDir = v_EnvDir;
    #else
        envDir = reflect(normalize(v_modelPos - u_CameraPosition), N);
    #endif
    vec4 envColor = textureCube(envMap, vec3(u_EnvMap_Flip * envDir.x, envDir.yz));
    envColor = envMapTexelToLinear( envColor );
    #ifdef ENVMAP_BLENDING_MULTIPLY
		outColor = mix(outColor, envColor * outColor, u_EnvMap_Intensity);
	#elif defined( ENVMAP_BLENDING_MIX )
		outColor = mix(outColor, envColor, u_EnvMap_Intensity);
	#elif defined( ENVMAP_BLENDING_ADD )
		outColor += envColor * u_EnvMap_Intensity;
	#endif
#endif`,Aa=`#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        varying vec3 v_EnvDir;
    #endif
    uniform samplerCube envMap;
    uniform float u_EnvMap_Flip;
    uniform float u_EnvMap_Intensity;
    uniform float u_EnvMapLight_Intensity;
    uniform int maxMipLevel;
#endif`,va=`#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        varying vec3 v_EnvDir;
    #endif
#endif`,xa=`
#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        vec3 transformedNormal = (transposeMat4(inverseMat4(u_Model)) * vec4(objectNormal, 0.0)).xyz;
        transformedNormal = normalize(transformedNormal);
        v_EnvDir = reflect(normalize(worldPosition.xyz - u_CameraPosition), transformedNormal);
    #endif
#endif`,ya=`#ifdef USE_FOG
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    #ifdef USE_EXP2_FOG
        float fogFactor = 1.0 - exp(-u_FogDensity * u_FogDensity * depth * depth);
    #else
        float fogFactor = smoothstep(u_FogNear, u_FogFar, depth);
    #endif
    gl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, fogFactor);
#endif`,wa=`#ifdef USE_FOG
    uniform vec3 u_FogColor;
    #ifdef USE_EXP2_FOG
        uniform float u_FogDensity;
    #else
        uniform float u_FogNear;
        uniform float u_FogFar;
    #endif
#endif`,Ra=`mat4 inverseMat4(mat4 m) {
    float
    a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
    a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
    a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
    a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],
    b00 = a00 * a11 - a01 * a10,
    b01 = a00 * a12 - a02 * a10,
    b02 = a00 * a13 - a03 * a10,
    b03 = a01 * a12 - a02 * a11,
    b04 = a01 * a13 - a03 * a11,
    b05 = a02 * a13 - a03 * a12,
    b06 = a20 * a31 - a21 * a30,
    b07 = a20 * a32 - a22 * a30,
    b08 = a20 * a33 - a23 * a30,
    b09 = a21 * a32 - a22 * a31,
    b10 = a21 * a33 - a23 * a31,
    b11 = a22 * a33 - a23 * a32,
    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    return mat4(
        a11 * b11 - a12 * b10 + a13 * b09,
        a02 * b10 - a01 * b11 - a03 * b09,
        a31 * b05 - a32 * b04 + a33 * b03,
        a22 * b04 - a21 * b05 - a23 * b03,
        a12 * b08 - a10 * b11 - a13 * b07,
        a00 * b11 - a02 * b08 + a03 * b07,
        a32 * b02 - a30 * b05 - a33 * b01,
        a20 * b05 - a22 * b02 + a23 * b01,
        a10 * b10 - a11 * b08 + a13 * b06,
        a01 * b08 - a00 * b10 - a03 * b06,
        a30 * b04 - a31 * b02 + a33 * b00,
        a21 * b02 - a20 * b04 - a23 * b00,
        a11 * b07 - a10 * b09 - a12 * b06,
        a00 * b09 - a01 * b07 + a02 * b06,
        a31 * b01 - a30 * b03 - a32 * b00,
        a20 * b03 - a21 * b01 + a22 * b00) / det;
}`,Ca=`
#if (defined(USE_PHONG) || defined(USE_PBR))
    vec3 V = normalize(u_CameraPosition - v_modelPos);
#endif
#ifdef USE_PBR
    #ifdef USE_PBR2
        vec3 diffuseColor = outColor.xyz;
        vec3 specularColor = specularFactor.xyz;
        float roughness = max(1.0 - glossinessFactor, 0.0525);
    #else
        vec3 diffuseColor = outColor.xyz * (1.0 - metalnessFactor);
        vec3 specularColor = mix(vec3(0.04), outColor.xyz, metalnessFactor);
        float roughness = max(roughnessFactor, 0.0525);
    #endif
    vec3 dxy = max(abs(dFdx(geometryNormal)), abs(dFdy(geometryNormal)));
    float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);
    roughness += geometryRoughness;
    roughness = min(roughness, 1.0);
    #ifdef USE_CLEARCOAT
        float clearcoat = u_Clearcoat;
        float clearcoatRoughness = u_ClearcoatRoughness;
        #ifdef USE_CLEARCOATMAP
		    clearcoat *= texture2D(clearcoatMap, v_Uv).x;
        #endif
        #ifdef USE_CLEARCOAT_ROUGHNESSMAP
		    clearcoatRoughness *= texture2D(clearcoatRoughnessMap, v_Uv).y;
	    #endif
        clearcoat = saturate(clearcoat);
        clearcoatRoughness = max(clearcoatRoughness, 0.0525);
	    clearcoatRoughness += geometryRoughness;
	    clearcoatRoughness = min(clearcoatRoughness, 1.0);
    #endif
#else
    vec3 diffuseColor = outColor.xyz;
    #ifdef USE_PHONG
        vec3 specularColor = u_SpecularColor.xyz;
        float shininess = u_Specular;
    #endif
#endif
vec3 L;
float falloff;
float dotNL;
vec3 irradiance;
float clearcoatDHR;
#ifdef USE_CLEARCOAT
    float ccDotNL;
    vec3 ccIrradiance;
#endif
#if NUM_DIR_LIGHTS > 0
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
        L = normalize(-u_Directional[i].direction);
        falloff = 1.0;
        #if defined(USE_SHADOW) && (UNROLLED_LOOP_INDEX < NUM_DIR_SHADOWS)
            #ifdef USE_PCSS_SOFT_SHADOW
                falloff *= getShadowWithPCSS(directionalDepthMap[i], directionalShadowMap[i], vDirectionalShadowCoord[i], u_DirectionalShadow[i].shadowMapSize, u_DirectionalShadow[i].shadowBias, u_DirectionalShadow[i].shadowParams);
            #else
                falloff *= getShadow(directionalShadowMap[i], vDirectionalShadowCoord[i], u_DirectionalShadow[i].shadowMapSize, u_DirectionalShadow[i].shadowBias, u_DirectionalShadow[i].shadowParams);
            #endif
        #endif
        dotNL = saturate(dot(N, L));
        irradiance = u_Directional[i].color * falloff * dotNL * PI;
        #ifdef USE_CLEARCOAT        
            ccDotNL = saturate(dot(clearcoatNormal, L));
            ccIrradiance = ccDotNL * u_Directional[i].color * falloff  * PI;
            clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
            reflectedLight.directSpecular += ccIrradiance * clearcoat * BRDF_Specular_GGX(specularColor, clearcoatNormal, L, V, clearcoatRoughness);
        #else
            clearcoatDHR = 0.0;
        #endif
        reflectedLight.directDiffuse += (1.0 - clearcoatDHR) * irradiance * BRDF_Diffuse_Lambert(diffuseColor);
        #ifdef USE_PHONG
            reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(specularColor, N, L, V, shininess) * specularStrength;
        #endif
        #ifdef USE_PBR
            reflectedLight.directSpecular += (1.0 - clearcoatDHR) * irradiance * BRDF_Specular_GGX(specularColor, N, L, V, roughness);
        #endif
    }
    #pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHTS > 0
    vec3 worldV;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
        worldV = v_modelPos - u_Point[i].position;
        L = -worldV;
        falloff = pow(clamp(1. - length(L) / u_Point[i].distance, 0.0, 1.0), u_Point[i].decay);
        L = normalize(L);
        #if defined(USE_SHADOW) && (UNROLLED_LOOP_INDEX < NUM_POINT_SHADOWS)
            falloff *= getPointShadow(pointShadowMap[i], vPointShadowCoord[i], u_PointShadow[i].shadowMapSize, u_PointShadow[i].shadowBias, u_PointShadow[i].shadowParams, u_PointShadow[i].shadowCameraRange);
        #endif
        dotNL = saturate(dot(N, L));
        irradiance = u_Point[i].color * falloff * dotNL * PI;
        #ifdef USE_CLEARCOAT        
            ccDotNL = saturate(dot(clearcoatNormal, L));
            ccIrradiance = ccDotNL *  u_Point[i].color * falloff  * PI;
            clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
            reflectedLight.directSpecular += ccIrradiance * clearcoat * BRDF_Specular_GGX(specularColor, clearcoatNormal, L, V, clearcoatRoughness);
        #else
            clearcoatDHR = 0.0;
        #endif
        reflectedLight.directDiffuse += (1.0 - clearcoatDHR) * irradiance * BRDF_Diffuse_Lambert(diffuseColor);
        #ifdef USE_PHONG
            reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(specularColor, N, L, V, shininess) * specularStrength;
        #endif
        #ifdef USE_PBR
            reflectedLight.directSpecular += (1.0 - clearcoatDHR) * irradiance * BRDF_Specular_GGX(specularColor, N, L, V, roughness);
        #endif
    }
    #pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
    float lightDistance;
    float angleCos;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
        L = u_Spot[i].position - v_modelPos;
        lightDistance = length(L);
        L = normalize(L);
        angleCos = dot(L, -normalize(u_Spot[i].direction));
        falloff = smoothstep(u_Spot[i].coneCos, u_Spot[i].penumbraCos, angleCos);
        falloff *= pow(clamp(1. - lightDistance / u_Spot[i].distance, 0.0, 1.0), u_Spot[i].decay);
        #if defined(USE_SHADOW) && (UNROLLED_LOOP_INDEX < NUM_SPOT_SHADOWS)
            #ifdef USE_PCSS_SOFT_SHADOW
                falloff *= getShadowWithPCSS(spotDepthMap[i], spotShadowMap[i], vSpotShadowCoord[i], u_SpotShadow[i].shadowMapSize, u_SpotShadow[i].shadowBias, u_SpotShadow[i].shadowParams);
            #else
                falloff *= getShadow(spotShadowMap[i], vSpotShadowCoord[i], u_SpotShadow[i].shadowMapSize, u_SpotShadow[i].shadowBias, u_SpotShadow[i].shadowParams);
            #endif
        #endif
        dotNL = saturate(dot(N, L));
        irradiance = u_Spot[i].color * falloff * dotNL * PI;
        #ifdef USE_CLEARCOAT        
            ccDotNL = saturate(dot(clearcoatNormal, L));
            ccIrradiance = ccDotNL *  u_Spot[i].color * falloff  * PI;
            clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
            reflectedLight.directSpecular += ccIrradiance * clearcoat * BRDF_Specular_GGX(specularColor, clearcoatNormal, L, V, clearcoatRoughness);
        #else
            clearcoatDHR = 0.0;
        #endif
        reflectedLight.directDiffuse += (1.0 - clearcoatDHR) * irradiance * BRDF_Diffuse_Lambert(diffuseColor);
        #ifdef USE_PHONG
            reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(specularColor, N, L, V, shininess) * specularStrength;
        #endif
        #ifdef USE_PBR
            reflectedLight.directSpecular += (1.0 - clearcoatDHR) * irradiance * BRDF_Specular_GGX(specularColor, N, L, V, roughness);
        #endif
    }
    #pragma unroll_loop_end
#endif
vec3 indirectIrradiance = vec3(0., 0., 0.);   
#ifdef USE_AMBIENT_LIGHT
    indirectIrradiance += u_AmbientLightColor * PI;
#endif
#ifdef USE_SPHERICALHARMONICS_LIGHT
    indirectIrradiance += getLightProbeIrradiance(u_SphericalHarmonicsLightData, N);
#endif
#if NUM_HEMI_LIGHTS > 0
    float hemiDiffuseWeight;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_HEMI_LIGHTS; i++) {
        L = normalize(u_Hemi[i].direction);
        dotNL = dot(N, L);
        hemiDiffuseWeight = 0.5 * dotNL + 0.5;
        indirectIrradiance += mix(u_Hemi[i].groundColor, u_Hemi[i].skyColor, hemiDiffuseWeight) * PI;
    }
    #pragma unroll_loop_end
#endif
reflectedLight.indirectDiffuse += indirectIrradiance * BRDF_Diffuse_Lambert(diffuseColor);
#if defined(USE_ENV_MAP) && defined(USE_PBR)
    vec3 iblIrradiance = vec3(0., 0., 0.);
    vec3 indirectRadiance = vec3(0., 0., 0.);
    vec3 clearcoatRadiance = vec3(0., 0., 0.);
    vec3 envDir;
    #ifdef USE_VERTEX_ENVDIR
        envDir = v_EnvDir;
    #else
        envDir = reflect(normalize(v_modelPos - u_CameraPosition), N);
    #endif
    iblIrradiance += getLightProbeIndirectIrradiance(maxMipLevel, N);
    indirectRadiance += getLightProbeIndirectRadiance(roughness, maxMipLevel, N, envDir);
    #ifdef USE_CLEARCOAT
        vec3 clearcoatDir = reflect(normalize(v_modelPos - u_CameraPosition), clearcoatNormal);
        clearcoatRadiance += getLightProbeIndirectRadiance(clearcoatRoughness, maxMipLevel, clearcoatNormal, clearcoatDir);
    #endif
    #ifdef USE_CLEARCOAT
        float ccDotNV = saturate(dot(clearcoatNormal, V));
        reflectedLight.indirectSpecular += clearcoatRadiance * clearcoat * BRDF_Specular_GGX_Environment(clearcoatNormal, V, specularColor, clearcoatRoughness);
        ccDotNL = ccDotNV;
        clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
    #else
        clearcoatDHR = 0.0;
    #endif
    float clearcoatInv = 1.0 - clearcoatDHR;
    vec3 singleScattering = vec3(0.0);
    vec3 multiScattering = vec3(0.0);
    vec3 cosineWeightedIrradiance = iblIrradiance * RECIPROCAL_PI;
    BRDF_Specular_Multiscattering_Environment(N, V, specularColor, roughness, singleScattering, multiScattering);
    vec3 diffuse = diffuseColor * (1.0 - (singleScattering + multiScattering));
    reflectedLight.indirectSpecular += clearcoatInv * indirectRadiance * singleScattering;
    reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
    reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
#endif`,Na=`#ifdef USE_AMBIENT_LIGHT
    uniform vec3 u_AmbientLightColor;
#endif
#ifdef USE_SPHERICALHARMONICS_LIGHT
    uniform vec3 u_SphericalHarmonicsLightData[9];
#endif
#ifdef USE_CLEARCOAT
    float clearcoatDHRApprox(const in float roughness, const in float dotNL) {
        return 0.04 + (1.0 - 0.16) * (pow(1.0 - dotNL, 5.0) * pow(1.0 - roughness, 2.0));
    }
#endif
#if NUM_HEMI_LIGHTS > 0
    struct HemisphereLight {
        vec3 direction;
        vec3 skyColor;
		vec3 groundColor;
    };
    uniform HemisphereLight u_Hemi[NUM_HEMI_LIGHTS];
#endif
#if NUM_DIR_LIGHTS > 0
    struct DirectLight {
        vec3 direction;
        vec3 color;
    };
    uniform DirectLight u_Directional[NUM_DIR_LIGHTS];
#endif
#if NUM_POINT_LIGHTS > 0
    struct PointLight {
        vec3 position;
        vec3 color;
        float distance;
        float decay;
    };
    uniform PointLight u_Point[NUM_POINT_LIGHTS];
#endif
#if NUM_SPOT_LIGHTS > 0
    struct SpotLight {
        vec3 position;
        vec3 color;
        float distance;
        float decay;
        float coneCos;
        float penumbraCos;
        vec3 direction;
    };
    uniform SpotLight u_Spot[NUM_SPOT_LIGHTS];
#endif
#if defined(USE_PBR) && defined(USE_ENV_MAP)
    vec3 getLightProbeIndirectIrradiance(const in int maxMIPLevel, const in vec3 N) {
        vec3 coordVec = vec3(u_EnvMap_Flip * N.x, N.yz);
    	#ifdef TEXTURE_LOD_EXT
    		vec4 envMapColor = textureCubeLodEXT(envMap, coordVec, float(maxMIPLevel));
    	#else
    		vec4 envMapColor = textureCube(envMap, coordVec, float(maxMIPLevel));
    	#endif
        envMapColor = envMapTexelToLinear(envMapColor);
        return PI * envMapColor.rgb * u_EnvMap_Intensity * u_EnvMapLight_Intensity;
    }
    float getSpecularMIPLevel(const in float roughness, const in int maxMIPLevel) {
    	float maxMIPLevelScalar = float(maxMIPLevel);
        float sigma = PI * roughness * roughness / (1.0 + roughness);
        float desiredMIPLevel = maxMIPLevelScalar + log2(sigma);
    	return clamp(desiredMIPLevel, 0.0, maxMIPLevelScalar);
    }
    vec3 getLightProbeIndirectRadiance(const in float roughness, const in int maxMIPLevel, const in vec3 normal, const in vec3 envDir) {
        float specularMIPLevel = getSpecularMIPLevel(roughness, maxMIPLevel);
        vec3 coordVec = normalize(mix(envDir, normal, roughness * roughness));
        coordVec.x *= u_EnvMap_Flip;
        #ifdef TEXTURE_LOD_EXT
    		vec4 envMapColor = textureCubeLodEXT(envMap, coordVec, specularMIPLevel);
    	#else
    		vec4 envMapColor = textureCube(envMap, coordVec, specularMIPLevel);
    	#endif
        envMapColor = envMapTexelToLinear(envMapColor);
        return envMapColor.rgb * u_EnvMap_Intensity;
    }
    float computeSpecularOcclusion(const in float dotNV, const in float ambientOcclusion, const in float roughness) {
    	return saturate(pow(dotNV + ambientOcclusion, exp2(-16.0 * roughness - 1.0)) - 1.0 + ambientOcclusion);
    }
#endif
#ifdef USE_SPHERICALHARMONICS_LIGHT
    vec3 shGetIrradianceAt(in vec3 normal, in vec3 shCoefficients[9]) {
        float x = normal.x, y = normal.y, z = normal.z;
        vec3 result = shCoefficients[0] * 0.886227;
        result += shCoefficients[1] * 2.0 * 0.511664 * y;
        result += shCoefficients[2] * 2.0 * 0.511664 * z;
        result += shCoefficients[3] * 2.0 * 0.511664 * x;
        result += shCoefficients[4] * 2.0 * 0.429043 * x * y;
        result += shCoefficients[5] * 2.0 * 0.429043 * y * z;
        result += shCoefficients[6] * (0.743125 * z * z - 0.247708);
        result += shCoefficients[7] * 2.0 * 0.429043 * x * z;
        result += shCoefficients[8] * 0.429043 * (x * x - y * y);
        return result;
    }
    vec3 getLightProbeIrradiance(const in vec3 lightProbe[9], const in vec3 normal) {
        vec3 irradiance = shGetIrradianceAt(normal, lightProbe);
        return irradiance;
    }
#endif`,La=`#ifdef USE_ALPHA_MAP
	uniform sampler2D alphaMap;
	varying vec2 vAlphaMapUV;
#endif`,Pa=`#ifdef USE_ALPHA_MAP
	outColor.a *= texture2D(alphaMap, vAlphaMapUV).g;
#endif`,ba=`#ifdef USE_ALPHA_MAP
    uniform mat3 alphaMapUVTransform;
	varying vec2 vAlphaMapUV;
#endif`,Da=`#ifdef USE_ALPHA_MAP
	#if (USE_ALPHA_MAP == 2)
        vAlphaMapUV = (alphaMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vAlphaMapUV = (alphaMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,Ia=`#ifdef USE_NORMAL_MAP
    uniform sampler2D normalMap;
    uniform vec2 normalScale;
#endif
#if defined(USE_NORMAL_MAP) || defined(USE_CLEARCOAT_NORMALMAP)
    #if defined(USE_TANGENT) && !defined(FLAT_SHADED)
        #define USE_TBN
    #else
        #include <tsn>
    #endif
#endif`,Oa=`
#ifdef FLAT_SHADED
    vec3 fdx = dFdx(v_modelPos);
    vec3 fdy = dFdy(v_modelPos);
    vec3 N = normalize(cross(fdx, fdy));
#else
    vec3 N = normalize(v_Normal);
    #ifdef DOUBLE_SIDED
        N = N * (float(gl_FrontFacing) * 2.0 - 1.0);
    #endif
#endif
#ifdef USE_TBN
	vec3 tangent = normalize(v_Tangent);
	vec3 bitangent = normalize(v_Bitangent);
	#ifdef DOUBLE_SIDED
		tangent = tangent * (float(gl_FrontFacing) * 2.0 - 1.0);
		bitangent = bitangent * (float(gl_FrontFacing) * 2.0 - 1.0);
	#endif
	mat3 tspace = mat3(tangent, bitangent, N);
#endif
vec3 geometryNormal = N;
#ifdef USE_NORMAL_MAP
    vec3 mapN = texture2D(normalMap, v_Uv).rgb * 2.0 - 1.0;
    mapN.xy *= normalScale;
    #ifdef USE_TBN
        N = normalize(tspace * mapN);
    #else
        mapN.xy *= (float(gl_FrontFacing) * 2.0 - 1.0);
        N = normalize(tsn(N, v_modelPos, v_Uv) * mapN);
    #endif
#elif defined(USE_BUMPMAP)
    N = perturbNormalArb(v_modelPos, N, dHdxy_fwd(v_Uv));
#endif
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D(clearcoatNormalMap, v_Uv).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TBN
		clearcoatNormal = normalize(tspace * clearcoatMapN);
	#else
		clearcoatMapN.xy *= (float(gl_FrontFacing) * 2.0 - 1.0);
		clearcoatNormal = normalize(tsn(clearcoatNormal, v_modelPos, v_Uv) * clearcoatMapN);
	#endif
#endif`,Ua=`#ifndef FLAT_SHADED
    varying vec3 v_Normal;
    #ifdef USE_TANGENT
        varying vec3 v_Tangent;
		varying vec3 v_Bitangent;
    #endif
#endif`,Fa=`#ifndef FLAT_SHADED
    varying vec3 v_Normal;
    #ifdef USE_TANGENT
        varying vec3 v_Tangent;
		varying vec3 v_Bitangent;
    #endif
#endif`,Ba=`#ifndef FLAT_SHADED
    v_Normal = (transposeMat4(inverseMat4(u_Model)) * vec4(objectNormal, 0.0)).xyz;
    #ifdef FLIP_SIDED
    	v_Normal = - v_Normal;
    #endif
    #ifdef USE_TANGENT
        v_Tangent = (transposeMat4(inverseMat4(u_Model)) * vec4(objectTangent, 0.0)).xyz;
        #ifdef FLIP_SIDED
            v_Tangent = - v_Tangent;
        #endif
        v_Bitangent = normalize(cross(v_Normal, v_Tangent) * a_Tangent.w);
    #endif
#endif`,Ga=`const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
    vec4 r = vec4( fract( v * PackFactors ), v );
    r.yzw -= r.xyz * ShiftRight8;    return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
    return dot( v, UnpackFactors );
}`,za=`#ifdef USE_PREMULTIPLIED_ALPHA
    gl_FragColor.rgb = gl_FragColor.rgb * gl_FragColor.a;
#endif`,Ha=`vec4 worldPosition = u_Model * vec4(transformed, 1.0);
gl_Position = u_ProjectionView * worldPosition;`,Va=`#if defined( DITHERING )
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ka=`#if defined( DITHERING )
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wa=`#ifdef USE_SHADOW_SAMPLER
    float computeShadow(sampler2DShadow shadowMap, vec3 shadowCoord) {
        return texture2D( shadowMap, shadowCoord );
    }
#else
    float computeShadow(sampler2D shadowMap, vec3 shadowCoord) {
        return step(shadowCoord.z, unpackRGBAToDepth(texture2D(shadowMap, shadowCoord.xy)));
    }
#endif
float computeShadowWithPoissonSampling(sampler2DShadow shadowMap, vec3 shadowCoord, float texelSize) {
    vec3 poissonDisk[4];
    poissonDisk[0] = vec3(-0.94201624, -0.39906216, 0);
    poissonDisk[1] = vec3(0.94558609, -0.76890725, 0);
    poissonDisk[2] = vec3(-0.094184101, -0.92938870, 0);
    poissonDisk[3] = vec3(0.34495938, 0.29387760, 0);
    return computeShadow(shadowMap, shadowCoord + poissonDisk[0] * texelSize) * 0.25 +
        computeShadow(shadowMap, shadowCoord + poissonDisk[1] * texelSize) * 0.25 +
        computeShadow(shadowMap, shadowCoord + poissonDisk[2] * texelSize) * 0.25 +
        computeShadow(shadowMap, shadowCoord + poissonDisk[3] * texelSize) * 0.25;
}
float computeShadowWithPCF1(sampler2DShadow shadowSampler, vec3 shadowCoord) {
    return computeShadow(shadowSampler, shadowCoord);
}
float computeShadowWithPCF3(sampler2DShadow shadowSampler, vec3 shadowCoord, vec2 shadowMapSizeAndInverse) {
    vec2 uv = shadowCoord.xy * shadowMapSizeAndInverse.x;    uv += 0.5;    vec2 st = fract(uv);    vec2 base_uv = floor(uv) - 0.5;    base_uv *= shadowMapSizeAndInverse.y;
    vec2 uvw0 = 3. - 2. * st;
    vec2 uvw1 = 1. + 2. * st;
    vec2 u = vec2((2. - st.x) / uvw0.x - 1., st.x / uvw1.x + 1.) * shadowMapSizeAndInverse.y;
    vec2 v = vec2((2. - st.y) / uvw0.y - 1., st.y / uvw1.y + 1.) * shadowMapSizeAndInverse.y;
    float shadow = 0.;
    shadow += uvw0.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[0]), shadowCoord.z));
    shadow += uvw1.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[0]), shadowCoord.z));
    shadow += uvw0.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[1]), shadowCoord.z));
    shadow += uvw1.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[1]), shadowCoord.z));
    shadow = shadow / 16.;
    return shadow;
}
float computeShadowWithPCF5(sampler2DShadow shadowSampler, vec3 shadowCoord, vec2 shadowMapSizeAndInverse) {
    vec2 uv = shadowCoord.xy * shadowMapSizeAndInverse.x;    uv += 0.5;    vec2 st = fract(uv);    vec2 base_uv = floor(uv) - 0.5;    base_uv *= shadowMapSizeAndInverse.y;
    vec2 uvw0 = 4. - 3. * st;
    vec2 uvw1 = vec2(7.);
    vec2 uvw2 = 1. + 3. * st;
    vec3 u = vec3((3. - 2. * st.x) / uvw0.x - 2., (3. + st.x) / uvw1.x, st.x / uvw2.x + 2.) * shadowMapSizeAndInverse.y;
    vec3 v = vec3((3. - 2. * st.y) / uvw0.y - 2., (3. + st.y) / uvw1.y, st.y / uvw2.y + 2.) * shadowMapSizeAndInverse.y;
    float shadow = 0.;
    shadow += uvw0.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[0]), shadowCoord.z));
    shadow += uvw1.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[0]), shadowCoord.z));
    shadow += uvw2.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[2], v[0]), shadowCoord.z));
    shadow += uvw0.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[1]), shadowCoord.z));
    shadow += uvw1.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[1]), shadowCoord.z));
    shadow += uvw2.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[2], v[1]), shadowCoord.z));
    shadow += uvw0.x * uvw2.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[2]), shadowCoord.z));
    shadow += uvw1.x * uvw2.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[2]), shadowCoord.z));
    shadow += uvw2.x * uvw2.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[2], v[2]), shadowCoord.z));
    shadow = shadow / 144.;
    return shadow;
}
float computeFallOff(float value, vec2 clipSpace, float frustumEdgeFalloff) {
    float mask = smoothstep(1.0 - frustumEdgeFalloff, 1.00000012, clamp(dot(clipSpace, clipSpace), 0., 1.));
    return mix(value, 1.0, mask);
}
float getShadow(sampler2DShadow shadowMap, vec4 shadowCoord, vec2 shadowMapSize, vec2 shadowBias, vec2 shadowParams) {
    shadowCoord.xyz /= shadowCoord.w;
    shadowCoord.z += shadowBias.x;
    bvec4 inFrustumVec = bvec4 (shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0);
    bool inFrustum = all(inFrustumVec);
    bvec2 frustumTestVec = bvec2(inFrustum, shadowCoord.z <= 1.0);
    bool frustumTest = all(frustumTestVec);
    float shadow = 1.0;
    if (frustumTest) {
        #ifdef USE_HARD_SHADOW
            shadow = computeShadow(shadowMap, shadowCoord.xyz);
        #else
            #ifdef USE_PCF3_SOFT_SHADOW
                vec2 shadowMapSizeAndInverse = vec2(shadowMapSize.x, 1. / shadowMapSize.x);
                shadow = computeShadowWithPCF3(shadowMap, shadowCoord.xyz, shadowMapSizeAndInverse);
            #else
                #ifdef USE_PCF5_SOFT_SHADOW
                    vec2 shadowMapSizeAndInverse = vec2(shadowMapSize.x, 1. / shadowMapSize.x);
                    shadow = computeShadowWithPCF5(shadowMap, shadowCoord.xyz, shadowMapSizeAndInverse);
                #else
                    float texelSize = shadowParams.x * 0.5 / shadowMapSize.x;
                    shadow = computeShadowWithPoissonSampling(shadowMap, shadowCoord.xyz, texelSize);
                #endif
            #endif
        #endif
        shadow = computeFallOff(shadow, shadowCoord.xy * 2. - 1., shadowParams.y);
    }
    return shadow;
}
float textureCubeCompare(samplerCube depths, vec3 uv, float compare) {
    return step(compare, unpackRGBAToDepth(textureCube(depths, uv)));
}
float getPointShadow(samplerCube shadowMap, vec4 shadowCoord, vec2 shadowMapSize, vec2 shadowBias, vec2 shadowParams, vec2 shadowCameraRange) {
    vec3 V = shadowCoord.xyz;
    float depth = (length(V) - shadowCameraRange.x) / (shadowCameraRange.y - shadowCameraRange.x);    depth += shadowBias.x;
    #ifdef USE_HARD_SHADOW
        return textureCubeCompare(shadowMap, normalize(V), depth);
    #else
        float texelSize = shadowParams.x * 0.5 / shadowMapSize.x;
        vec3 poissonDisk[4];
        poissonDisk[0] = vec3(-1.0, 1.0, -1.0);
        poissonDisk[1] = vec3(1.0, -1.0, -1.0);
        poissonDisk[2] = vec3(-1.0, -1.0, -1.0);
        poissonDisk[3] = vec3(1.0, -1.0, 1.0);
        return textureCubeCompare(shadowMap, normalize(V) + poissonDisk[0] * texelSize, depth) * 0.25 +
            textureCubeCompare(shadowMap, normalize(V) + poissonDisk[1] * texelSize, depth) * 0.25 +
            textureCubeCompare(shadowMap, normalize(V) + poissonDisk[2] * texelSize, depth) * 0.25 +
            textureCubeCompare(shadowMap, normalize(V) + poissonDisk[3] * texelSize, depth) * 0.25;
    #endif
}
#ifdef USE_PCSS_SOFT_SHADOW
    const vec3 PoissonSamplers32[64] = vec3[64](
        vec3(0.06407013, 0.05409927, 0.),
        vec3(0.7366577, 0.5789394, 0.),
        vec3(-0.6270542, -0.5320278, 0.),
        vec3(-0.4096107, 0.8411095, 0.),
        vec3(0.6849564, -0.4990818, 0.),
        vec3(-0.874181, -0.04579735, 0.),
        vec3(0.9989998, 0.0009880066, 0.),
        vec3(-0.004920578, -0.9151649, 0.),
        vec3(0.1805763, 0.9747483, 0.),
        vec3(-0.2138451, 0.2635818, 0.),
        vec3(0.109845, 0.3884785, 0.),
        vec3(0.06876755, -0.3581074, 0.),
        vec3(0.374073, -0.7661266, 0.),
        vec3(0.3079132, -0.1216763, 0.),
        vec3(-0.3794335, -0.8271583, 0.),
        vec3(-0.203878, -0.07715034, 0.),
        vec3(0.5912697, 0.1469799, 0.),
        vec3(-0.88069, 0.3031784, 0.),
        vec3(0.5040108, 0.8283722, 0.),
        vec3(-0.5844124, 0.5494877, 0.),
        vec3(0.6017799, -0.1726654, 0.),
        vec3(-0.5554981, 0.1559997, 0.),
        vec3(-0.3016369, -0.3900928, 0.),
        vec3(-0.5550632, -0.1723762, 0.),
        vec3(0.925029, 0.2995041, 0.),
        vec3(-0.2473137, 0.5538505, 0.),
        vec3(0.9183037, -0.2862392, 0.),
        vec3(0.2469421, 0.6718712, 0.),
        vec3(0.3916397, -0.4328209, 0.),
        vec3(-0.03576927, -0.6220032, 0.),
        vec3(-0.04661255, 0.7995201, 0.),
        vec3(0.4402924, 0.3640312, 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.)
    );
    const vec3 PoissonSamplers64[64] = vec3[64](
        vec3(-0.613392, 0.617481, 0.),
        vec3(0.170019, -0.040254, 0.),
        vec3(-0.299417, 0.791925, 0.),
        vec3(0.645680, 0.493210, 0.),
        vec3(-0.651784, 0.717887, 0.),
        vec3(0.421003, 0.027070, 0.),
        vec3(-0.817194, -0.271096, 0.),
        vec3(-0.705374, -0.668203, 0.),
        vec3(0.977050, -0.108615, 0.),
        vec3(0.063326, 0.142369, 0.),
        vec3(0.203528, 0.214331, 0.),
        vec3(-0.667531, 0.326090, 0.),
        vec3(-0.098422, -0.295755, 0.),
        vec3(-0.885922, 0.215369, 0.),
        vec3(0.566637, 0.605213, 0.),
        vec3(0.039766, -0.396100, 0.),
        vec3(0.751946, 0.453352, 0.),
        vec3(0.078707, -0.715323, 0.),
        vec3(-0.075838, -0.529344, 0.),
        vec3(0.724479, -0.580798, 0.),
        vec3(0.222999, -0.215125, 0.),
        vec3(-0.467574, -0.405438, 0.),
        vec3(-0.248268, -0.814753, 0.),
        vec3(0.354411, -0.887570, 0.),
        vec3(0.175817, 0.382366, 0.),
        vec3(0.487472, -0.063082, 0.),
        vec3(-0.084078, 0.898312, 0.),
        vec3(0.488876, -0.783441, 0.),
        vec3(0.470016, 0.217933, 0.),
        vec3(-0.696890, -0.549791, 0.),
        vec3(-0.149693, 0.605762, 0.),
        vec3(0.034211, 0.979980, 0.),
        vec3(0.503098, -0.308878, 0.),
        vec3(-0.016205, -0.872921, 0.),
        vec3(0.385784, -0.393902, 0.),
        vec3(-0.146886, -0.859249, 0.),
        vec3(0.643361, 0.164098, 0.),
        vec3(0.634388, -0.049471, 0.),
        vec3(-0.688894, 0.007843, 0.),
        vec3(0.464034, -0.188818, 0.),
        vec3(-0.440840, 0.137486, 0.),
        vec3(0.364483, 0.511704, 0.),
        vec3(0.034028, 0.325968, 0.),
        vec3(0.099094, -0.308023, 0.),
        vec3(0.693960, -0.366253, 0.),
        vec3(0.678884, -0.204688, 0.),
        vec3(0.001801, 0.780328, 0.),
        vec3(0.145177, -0.898984, 0.),
        vec3(0.062655, -0.611866, 0.),
        vec3(0.315226, -0.604297, 0.),
        vec3(-0.780145, 0.486251, 0.),
        vec3(-0.371868, 0.882138, 0.),
        vec3(0.200476, 0.494430, 0.),
        vec3(-0.494552, -0.711051, 0.),
        vec3(0.612476, 0.705252, 0.),
        vec3(-0.578845, -0.768792, 0.),
        vec3(-0.772454, -0.090976, 0.),
        vec3(0.504440, 0.372295, 0.),
        vec3(0.155736, 0.065157, 0.),
        vec3(0.391522, 0.849605, 0.),
        vec3(-0.620106, -0.328104, 0.),
        vec3(0.789239, -0.419965, 0.),
        vec3(-0.545396, 0.538133, 0.),
        vec3(-0.178564, -0.596057, 0.)
    );
    float getRand(vec2 seed) {
        return fract(sin(dot(seed.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }
    float computeShadowWithPCSS(sampler2D depthSampler, sampler2DShadow shadowSampler, vec3 shadowCoord, float shadowMapSizeInverse, float lightSizeUV, int searchTapCount, int pcfTapCount, vec3[64] poissonSamplers) {
        float depthMetric = shadowCoord.z;
        float blockerDepth = 0.0;
        float sumBlockerDepth = 0.0;
        float numBlocker = 0.0;
        for (int i = 0; i < searchTapCount; i++) {
            blockerDepth = unpackRGBAToDepth(texture(depthSampler, shadowCoord.xy + (lightSizeUV * shadowMapSizeInverse * PoissonSamplers32[i].xy)));
            if (blockerDepth < depthMetric) {
                sumBlockerDepth += blockerDepth;
                numBlocker++;
            }
        }
        if (numBlocker < 1.0) {
            return 1.0;
        }
        float avgBlockerDepth = sumBlockerDepth / numBlocker;
        float AAOffset = shadowMapSizeInverse * 10.;
        float penumbraRatio = ((depthMetric - avgBlockerDepth) + AAOffset);
        float filterRadius = penumbraRatio * lightSizeUV * shadowMapSizeInverse;
        float random = getRand(shadowCoord.xy);        float rotationAngle = random * 3.1415926;
        vec2 rotationVector = vec2(cos(rotationAngle), sin(rotationAngle));
        float shadow = 0.;
        for (int i = 0; i < pcfTapCount; i++) {
            vec3 offset = poissonSamplers[i];
            offset = vec3(offset.x * rotationVector.x - offset.y * rotationVector.y, offset.y * rotationVector.x + offset.x * rotationVector.y, 0.);
            shadow += texture(shadowSampler, shadowCoord + offset * filterRadius);
        }
        shadow /= float(pcfTapCount);
        shadow = mix(shadow, 1., depthMetric - avgBlockerDepth);
        return shadow;
    }
    float getShadowWithPCSS(sampler2D depthSampler, sampler2DShadow shadowMap, vec4 shadowCoord, vec2 shadowMapSize, vec2 shadowBias, vec2 shadowParams) {
        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias.x;
        bvec4 inFrustumVec = bvec4 (shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0);
        bool inFrustum = all(inFrustumVec);
        bvec2 frustumTestVec = bvec2(inFrustum, shadowCoord.z <= 1.0);
        bool frustumTest = all(frustumTestVec);
        float shadow = 1.0;
        if (frustumTest) {
            #ifdef USE_PCSS16_SOFT_SHADOW
                shadow = computeShadowWithPCSS(depthSampler, shadowMap, shadowCoord.xyz, 1. / shadowMapSize.x, 0.1 * shadowMapSize.x, 16, 16, PoissonSamplers32);
            #else
                #ifdef USE_PCSS32_SOFT_SHADOW
                    shadow = computeShadowWithPCSS(depthSampler, shadowMap, shadowCoord.xyz, 1. / shadowMapSize.x, 0.1 * shadowMapSize.x, 16, 32, PoissonSamplers32);
                #else
                    shadow = computeShadowWithPCSS(depthSampler, shadowMap, shadowCoord.xyz, 1. / shadowMapSize.x, 0.1 * shadowMapSize.x, 32, 64, PoissonSamplers64);
                #endif
            #endif
            shadow = computeFallOff(shadow, shadowCoord.xy * 2. - 1., shadowParams.y);
        }
        return shadow;
    }
#endif`,Xa=`#ifdef USE_SHADOW
#endif`,qa=`#ifdef USE_SHADOW
	#if NUM_DIR_SHADOWS > 0
		uniform sampler2DShadow directionalShadowMap[NUM_DIR_SHADOWS];
		varying vec4 vDirectionalShadowCoord[NUM_DIR_SHADOWS];
		#ifdef USE_PCSS_SOFT_SHADOW
			uniform sampler2D directionalDepthMap[NUM_DIR_SHADOWS];
		#endif
		struct DirectLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform DirectLightShadow u_DirectionalShadow[NUM_DIR_SHADOWS];
	#endif
	#if NUM_POINT_SHADOWS > 0
		uniform samplerCube pointShadowMap[NUM_POINT_SHADOWS];
		varying vec4 vPointShadowCoord[NUM_POINT_SHADOWS];
		struct PointLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
			vec2 shadowCameraRange;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow u_PointShadow[NUM_POINT_SHADOWS];
	#endif
	#if NUM_SPOT_SHADOWS > 0
		uniform sampler2DShadow spotShadowMap[NUM_SPOT_SHADOWS];
		varying vec4 vSpotShadowCoord[NUM_SPOT_SHADOWS];
		#ifdef USE_PCSS_SOFT_SHADOW
			uniform sampler2D spotDepthMap[NUM_SPOT_SHADOWS];
		#endif
		struct SpotLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform SpotLightShadow u_SpotShadow[NUM_SPOT_SHADOWS];
	#endif
	#include <packing>
	#include <shadow>
#endif`,Ya=`#ifdef USE_SHADOW
	#if NUM_DIR_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[NUM_DIR_SHADOWS];
		varying vec4 vDirectionalShadowCoord[NUM_DIR_SHADOWS];
		struct DirectLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform DirectLightShadow u_DirectionalShadow[NUM_DIR_SHADOWS];
	#endif
	#if NUM_POINT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[NUM_POINT_SHADOWS];
		varying vec4 vPointShadowCoord[NUM_POINT_SHADOWS];
		struct PointLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
			vec2 shadowCameraRange;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow u_PointShadow[NUM_POINT_SHADOWS];
	#endif
	#if NUM_SPOT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[NUM_SPOT_SHADOWS];
		varying vec4 vSpotShadowCoord[NUM_SPOT_SHADOWS];
		struct SpotLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform SpotLightShadow u_SpotShadow[NUM_SPOT_SHADOWS];
	#endif
#endif`,Qa=`
#ifdef USE_SHADOW
	#if NUM_DIR_SHADOWS > 0 || NUM_POINT_SHADOWS > 0 || NUM_SPOT_SHADOWS > 0
		vec3 shadowWorldNormal = (transposeMat4(inverseMat4(u_Model)) * vec4(objectNormal, 0.0)).xyz;
		shadowWorldNormal = normalize(shadowWorldNormal);
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_SHADOWS > 0
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_DIR_SHADOWS; i++) {
			shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * u_DirectionalShadow[i].shadowBias[1], 0);
			vDirectionalShadowCoord[i] = directionalShadowMatrix[i] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_SHADOWS > 0
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_POINT_SHADOWS; i++) {
			shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * u_PointShadow[i].shadowBias[1], 0);
			vPointShadowCoord[i] = pointShadowMatrix[i] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_SHADOWS > 0
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_SPOT_SHADOWS; i++) {
			shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * u_SpotShadow[i].shadowBias[1], 0);
			vSpotShadowCoord[i] = spotShadowMatrix[i] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif`,Ka=`#ifdef USE_MORPHNORMALS
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,ja=`#ifdef USE_MORPHTARGETS
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Za=`#ifdef USE_MORPHTARGETS
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
        transformed += morphTarget4 * morphTargetInfluences[ 4 ];
        transformed += morphTarget5 * morphTargetInfluences[ 5 ];
        transformed += morphTarget6 * morphTargetInfluences[ 6 ];
        transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,$a=`#ifdef USE_SKINNING
    attribute vec4 skinIndex;
	attribute vec4 skinWeight;
    uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
    #ifdef BONE_TEXTURE
        uniform sampler2D boneTexture;
        uniform int boneTextureSize;
        mat4 getBoneMatrix( const in float i ) {
            float j = i * 4.0;
            float x = mod( j, float( boneTextureSize ) );
            float y = floor( j / float( boneTextureSize ) );
            float dx = 1.0 / float( boneTextureSize );
            float dy = 1.0 / float( boneTextureSize );
            y = dy * ( y + 0.5 );
            vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
            vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
            vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
            vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
            mat4 bone = mat4( v1, v2, v3, v4 );
            return bone;
        }
    #else
        uniform mat4 boneMatrices[MAX_BONES];
        mat4 getBoneMatrix(const in float i) {
            mat4 bone = boneMatrices[int(i)];
            return bone;
        }
    #endif
#endif`,Ja=`#ifdef USE_SKINNING
    mat4 boneMatX = getBoneMatrix( skinIndex.x );
    mat4 boneMatY = getBoneMatrix( skinIndex.y );
    mat4 boneMatZ = getBoneMatrix( skinIndex.z );
    mat4 boneMatW = getBoneMatrix( skinIndex.w );
    vec4 skinVertex = bindMatrix * vec4(transformed, 1.0);
    vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	skinned = bindMatrixInverse * skinned;
    transformed = skinned.xyz / skinned.w;
#endif`,eo=`#ifdef USE_SKINNING
    mat4 skinMatrix = mat4( 0.0 );
    skinMatrix += skinWeight.x * boneMatX;
    skinMatrix += skinWeight.y * boneMatY;
    skinMatrix += skinWeight.z * boneMatZ;
    skinMatrix += skinWeight.w * boneMatW;
    skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
    objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
    #ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,to=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, v_Uv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,no=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,io=`mat4 transposeMat4(mat4 inMatrix) {
    vec4 i0 = inMatrix[0];
    vec4 i1 = inMatrix[1];
    vec4 i2 = inMatrix[2];
    vec4 i3 = inMatrix[3];
    mat4 outMatrix = mat4(
        vec4(i0.x, i1.x, i2.x, i3.x),
        vec4(i0.y, i1.y, i2.y, i3.y),
        vec4(i0.z, i1.z, i2.z, i3.z),
        vec4(i0.w, i1.w, i2.w, i3.w)
    );
    return outMatrix;
}`,so=`mat3 tsn(vec3 N, vec3 V, vec2 uv) {
    vec3 q0 = dFdx(V.xyz);
    vec3 q1 = dFdy(V.xyz);
    vec2 st0 = dFdx(uv.xy);
    vec2 st1 = dFdy(uv.xy);
    float scale = sign(st1.y * st0.x - st0.y * st1.x);
    vec3 S = normalize((q0 * st1.y - q1 * st0.y) * scale);
    vec3 T = normalize((-q0 * st1.x + q1 * st0.x) * scale);
    return mat3(S, T, N);
}`,ro=`#ifdef USE_UV1
    varying vec2 v_Uv;
#endif
#ifdef USE_UV2
    varying vec2 v_Uv2;
#endif`,ao=`#if defined(USE_UV1) || defined(USE_UV2)
    uniform mat3 uvTransform;
#endif
#ifdef USE_UV1
    attribute vec2 a_Uv;
    varying vec2 v_Uv;
#endif
#ifdef USE_UV2
    attribute vec2 a_Uv2;
    varying vec2 v_Uv2;
#endif`,oo=`#ifdef USE_UV1
    v_Uv = (uvTransform * vec3(a_Uv, 1.)).xy;
#endif
#ifdef USE_UV2
    v_Uv2 = (uvTransform * vec3(a_Uv2, 1.)).xy;
#endif`,co="varying vec3 v_modelPos;",lo="varying vec3 v_modelPos;",ho=`
v_modelPos = worldPosition.xyz;`,uo=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fo=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,po=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		uniform float logDepthCameraNear;
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
		uniform float logDepthCameraNear;
	#endif
#endif`,_o=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w - logDepthCameraNear;
		vIsPerspective = float( isPerspectiveMatrix( u_Projection ) );
	#else
		if ( isPerspectiveMatrix( u_Projection ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w - logDepthCameraNear + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mo=`#ifdef USE_CLEARCOAT
	uniform float u_Clearcoat;
	uniform float u_ClearcoatRoughness;
#endif
#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`;const Ns={alphaTest_frag:Kr,aoMap_pars_frag:jr,aoMap_pars_vert:Zr,aoMap_vert:$r,aoMap_frag:Jr,begin_frag:ea,begin_vert:ta,bsdfs:na,bumpMap_pars_frag:ia,clippingPlanes_frag:sa,clippingPlanes_pars_frag:ra,color_frag:aa,color_pars_frag:oa,color_pars_vert:ca,color_vert:la,common_frag:ha,common_vert:ua,diffuseMap_frag:da,diffuseMap_pars_frag:fa,emissiveMap_frag:pa,emissiveMap_pars_frag:_a,emissiveMap_vert:ma,emissiveMap_pars_vert:ga,encodings_frag:Ea,encodings_pars_frag:Ma,end_frag:Ta,envMap_frag:Sa,envMap_pars_frag:Aa,envMap_pars_vert:va,envMap_vert:xa,fog_frag:ya,fog_pars_frag:wa,inverse:Ra,light_frag:Ca,light_pars_frag:Na,alphamap_pars_frag:La,alphamap_frag:Pa,alphamap_pars_vert:ba,alphamap_vert:Da,normalMap_pars_frag:Ia,normal_frag:Oa,normal_pars_frag:Ua,normal_pars_vert:Fa,normal_vert:Ba,packing:Ga,premultipliedAlpha_frag:za,pvm_vert:Ha,dithering_frag:Va,dithering_pars_frag:ka,shadow:Wa,shadowMap_frag:Xa,shadowMap_pars_frag:qa,shadowMap_pars_vert:Ya,shadowMap_vert:Qa,morphnormal_vert:Ka,morphtarget_pars_vert:ja,morphtarget_vert:Za,skinning_pars_vert:$a,skinning_vert:Ja,skinnormal_vert:eo,specularMap_frag:to,specularMap_pars_frag:no,transpose:io,tsn:so,uv_pars_frag:ro,uv_pars_vert:ao,uv_vert:oo,modelPos_pars_frag:co,modelPos_pars_vert:lo,modelPos_vert:ho,logdepthbuf_frag:uo,logdepthbuf_pars_frag:fo,logdepthbuf_pars_vert:po,logdepthbuf_vert:_o,clearcoat_pars_frag:mo};var go=`#include <common_frag>
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <modelPos_pars_frag>
#if defined(USE_ENV_MAP) && !defined(USE_VERTEX_ENVDIR)
    #include <normalMap_pars_frag>
    #include <normal_pars_frag>    
#endif
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <fog_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    reflectedLight.indirectDiffuse += vec3(1.0);
    #include <aoMap_frag>
    reflectedLight.indirectDiffuse *= outColor.xyz;
    outColor.xyz = reflectedLight.indirectDiffuse;
    #if defined(USE_ENV_MAP) && !defined(USE_VERTEX_ENVDIR)
        #include <normal_frag>
    #endif
    #include <envMap_frag>
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
}`,Eo=`#include <common_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#if defined(USE_ENV_MAP) && !defined(USE_VERTEX_ENVDIR)
    #include <normal_pars_vert>
#endif
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <skinning_vert>
    #include <pvm_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #ifdef USE_ENV_MAP
        #include <morphnormal_vert>
        #include <skinnormal_vert>
        #ifndef USE_VERTEX_ENVDIR
            #include <normal_vert>
        #endif  
    #endif
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
}`,Mo=`#include <common_frag>
#include <diffuseMap_pars_frag>
#include <modelPos_pars_frag>
#include <uv_pars_frag>
#include <packing>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
        vec4 texelColor = texture2D( diffuseMap, v_Uv );
        float alpha = texelColor.a * u_Opacity;
        if(alpha < ALPHATEST) discard;
    #endif
    #include <logdepthbuf_frag>
    
    #ifdef DEPTH_PACKING_RGBA
        gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
    #else
        gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), u_Opacity );
    #endif
}`,To=`#include <common_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <uv_pars_vert>
#include <modelPos_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <uv_vert>
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <skinning_vert>
    #include <pvm_vert>
    #include <logdepthbuf_vert>
    #include <modelPos_vert>
}`,So=`#include <common_frag>
uniform float nearDistance;
uniform float farDistance;
#include <modelPos_pars_frag>
#include <packing>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    
    float dist = length( v_modelPos - u_CameraPosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
    gl_FragColor = packDepthToRGBA(dist);
}`,Ao=`#include <common_vert>
#include <modelPos_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <skinning_vert>
    #include <pvm_vert>
    #include <modelPos_vert>
}`,vo=`#define USE_LAMBERT
#include <common_frag>
#include <dithering_pars_frag>
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <normalMap_pars_frag>
#include <alphamap_pars_frag>
#include <bumpMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
    #include <envMap_frag>
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,xo=`#define USE_LAMBERT
#include <common_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <emissiveMap_pars_vert>
#include <shadowMap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <pvm_vert>
    #include <normal_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
    #include <emissiveMap_vert>
    #include <shadowMap_vert>
}`,yo=`#include <common_frag>
#include <diffuseMap_pars_frag>
#include <uv_pars_frag>
#include <packing>
#include <normal_pars_frag>
#include <logdepthbuf_pars_frag>
void main() {
    #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
        vec4 texelColor = texture2D( diffuseMap, v_Uv );
        float alpha = texelColor.a * u_Opacity;
        if(alpha < ALPHATEST) discard;
    #endif
    #include <logdepthbuf_frag>
    vec4 packedNormalDepth;
    packedNormalDepth.xyz = normalize(v_Normal) * 0.5 + 0.5;
    packedNormalDepth.w = gl_FragCoord.z;
    gl_FragColor = packedNormalDepth;
}`,wo=`#include <common_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <uv_vert>
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <normal_vert>
    #include <pvm_vert>
    #include <logdepthbuf_vert>
}`,Ro=`#define USE_PBR
#include <common_frag>
#include <dithering_pars_frag>
uniform float u_Metalness;
#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif
uniform float u_Roughness;
#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <normalMap_pars_frag>
#include <bumpMap_pars_frag>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <clearcoat_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    float roughnessFactor = u_Roughness;
    #ifdef USE_ROUGHNESSMAP
    	vec4 texelRoughness = texture2D( roughnessMap, v_Uv );
    	roughnessFactor *= texelRoughness.g;
    #endif
    float metalnessFactor = u_Metalness;
    #ifdef USE_METALNESSMAP
    	vec4 texelMetalness = texture2D( metalnessMap, v_Uv );
    	metalnessFactor *= texelMetalness.b;
    #endif
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,Co=`#define USE_PBR
#define USE_PBR2
#include <common_frag>
#include <dithering_pars_frag>
uniform vec3 u_SpecularColor;
#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif
uniform float glossiness;
#ifdef USE_GLOSSINESSMAP
	uniform sampler2D glossinessMap;
#endif
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <normalMap_pars_frag>
#include <bumpMap_pars_frag>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    vec3 specularFactor = u_SpecularColor;
    #ifdef USE_SPECULARMAP
        vec4 texelSpecular = texture2D(specularMap, v_Uv);
        texelSpecular = sRGBToLinear(texelSpecular);
        specularFactor *= texelSpecular.rgb;
    #endif
    float glossinessFactor = glossiness;
    #ifdef USE_GLOSSINESSMAP
        vec4 texelGlossiness = texture2D(glossinessMap, v_Uv);
        glossinessFactor *= texelGlossiness.a;
    #endif
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,Ui=`#define USE_PBR
#include <common_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <emissiveMap_pars_vert>
#include <shadowMap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <pvm_vert>
    #include <normal_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
    #include <emissiveMap_vert>
    #include <shadowMap_vert>
}`,No=`#define USE_PHONG
#include <common_frag>
#include <dithering_pars_frag>
uniform float u_Specular;
uniform vec3 u_SpecularColor;
#include <specularMap_pars_frag>
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <normalMap_pars_frag>
#include <bumpMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    #include <specularMap_frag>
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #include <envMap_frag>
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,Lo=`#define USE_PHONG
#include <common_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <emissiveMap_pars_vert>
#include <shadowMap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <pvm_vert>
    #include <normal_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
    #include <emissiveMap_vert>
    #include <shadowMap_vert>
}`,Po=`#include <common_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <fog_pars_frag>
#include <logdepthbuf_pars_frag>
void main() {
    #include <begin_frag>
    #include <color_frag>
    #include <logdepthbuf_frag>
    #ifdef USE_DIFFUSE_MAP
        outColor *= texture2D(diffuseMap, vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
    #endif
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
}`,bo=`#include <common_vert>
#include <color_pars_vert>
#include <logdepthbuf_pars_vert>
uniform float u_PointSize;
uniform float u_PointScale;
void main() {
    #include <begin_vert>
    #include <pvm_vert>
    #include <color_vert>
    vec4 mvPosition = u_View * u_Model * vec4(transformed, 1.0);
    #ifdef USE_SIZEATTENUATION
        gl_PointSize = u_PointSize * ( u_PointScale / - mvPosition.z );
    #else
        gl_PointSize = u_PointSize;
    #endif
    #include <logdepthbuf_vert>
}`;const zt={basic_frag:go,basic_vert:Eo,depth_frag:Mo,depth_vert:To,distance_frag:So,distance_vert:Ao,lambert_frag:vo,lambert_vert:xo,normaldepth_frag:yo,normaldepth_vert:wo,pbr_frag:Ro,pbr_vert:Ui,pbr2_frag:Co,pbr2_vert:Ui,phong_frag:No,phong_vert:Lo,point_frag:Po,point_vert:bo};class Do{constructor(e,t,n){this.gl=e,this.name=n.name,this.type=n.type,this.size=n.size,this.location=e.getAttribLocation(t,this.name),this.count=Io(e,this.type),this.format=Oo(e,this.type),this.locationSize=1,this.type===e.FLOAT_MAT2&&(this.locationSize=2),this.type===e.FLOAT_MAT3&&(this.locationSize=3),this.type===e.FLOAT_MAT4&&(this.locationSize=4)}}function Io(a,e){switch(e){case a.FLOAT:case a.BYTE:case a.UNSIGNED_BYTE:case a.UNSIGNED_SHORT:return 1;case a.FLOAT_VEC2:return 2;case a.FLOAT_VEC3:return 3;case a.FLOAT_VEC4:return 4;case a.FLOAT_MAT2:return 4;case a.FLOAT_MAT3:return 9;case a.FLOAT_MAT4:return 16;default:return 0}}function Oo(a,e){switch(e){case a.FLOAT:case a.FLOAT_VEC2:case a.FLOAT_VEC3:case a.FLOAT_VEC4:case a.FLOAT_MAT2:case a.FLOAT_MAT3:case a.FLOAT_MAT4:return a.FLOAT;case a.UNSIGNED_BYTE:return a.UNSIGNED_BYTE;case a.UNSIGNED_SHORT:return a.UNSIGNED_SHORT;case a.BYTE:return a.BYTE;default:return a.FLOAT}}class Uo{constructor(e){this._gl=e,this._extensions={},this.version=parseFloat(/^WebGL (\d)/.exec(e.getParameter(e.VERSION))[1]);const t=this.getExtension("EXT_texture_filter_anisotropic");this.anisotropyExt=t,this.maxAnisotropy=t!==null?e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT):1;let n=null,s=!1;try{this.version>1?(n=this.getExtension("EXT_disjoint_timer_query_webgl2"),n&&(s=!!e.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT))):(n=this.getExtension("EXT_disjoint_timer_query"),n&&(s=!!n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)))}catch(i){console.warn(i)}this.timerQuery=n,this.canUseTimestamp=s,this.parallelShaderCompileExt=this.getExtension("KHR_parallel_shader_compile"),this.maxPrecision=Bo(e,"highp"),this.maxTextures=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.maxVertexTextures=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxCubemapSize=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),this.maxVertexUniformVectors=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),this.maxSamples=this.version>1?e.getParameter(e.MAX_SAMPLES):1,this.lineWidthRange=e.getParameter(e.ALIASED_LINE_WIDTH_RANGE)}getExtension(e){const t=this._gl,n=this._extensions;if(n[e]!==void 0)return n[e];let s=null;for(const i of Fo)if(s=t.getExtension(i+e),s)break;return n[e]=s,s}}const Fo=["","WEBKIT_","MOZ_"];function Bo(a,e){if(e==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";e="mediump"}return e==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}class Go extends Fe{constructor(e,t,n,s){super(e),this._gl=t,this._buffers=n,this._vertexArrayBindings=s;const i=this;function r(o){const c=o.target,l=i.get(c);c.removeEventListener("dispose",r),c.index!==null&&n.removeBuffer(c.index.buffer);for(const h in c.attributes)n.removeBuffer(c.attributes[h].buffer);for(const h in c.morphAttributes){const u=c.morphAttributes[h];for(let f=0,d=u.length;f<d;f++)n.removeBuffer(u[f].buffer)}s.releaseByGeometry(c),l.created=!1,i.delete(c)}this._onGeometryDispose=r}setGeometry(e,t){const n=this._gl,s=this._buffers,i=this.get(e);if(i.pass!==t.count){i.pass=t.count,i.created||(e.addEventListener("dispose",this._onGeometryDispose),i.created=!0),e.index!==null&&s.setBuffer(e.index.buffer,n.ELEMENT_ARRAY_BUFFER,this._vertexArrayBindings);for(const r in e.attributes)s.setBuffer(e.attributes[r].buffer,n.ARRAY_BUFFER);for(const r in e.morphAttributes){const o=e.morphAttributes[r];for(let c=0,l=o.length;c<l;c++)s.setBuffer(o[c].buffer,n.ARRAY_BUFFER)}return i}}}const zo={u_Model:[1,null],u_Projection:[2,function(a){this.set(a.projectionMatrix.elements)}],u_View:[2,function(a){this.set(a.viewMatrix.elements)}],u_ProjectionView:[2,function(a){this.set(a.projectionViewMatrix.elements)}],u_CameraPosition:[2,function(a){this.setValue(a.position.x,a.position.y,a.position.z)}],logDepthBufFC:[2,function(a){this.set(a.logDepthBufFC)}],logDepthCameraNear:[2,function(a){this.set(a.logDepthCameraNear)}],u_EnvMapLight_Intensity:[3,function(a){this.set(a.environmentLightIntensity)}],u_FogColor:[3,function(a){const e=a.fog.color;this.setValue(e.r,e.g,e.b)}],u_FogDensity:[3,function(a){this.set(a.fog.density)}],u_FogNear:[3,function(a){this.set(a.fog.near)}],u_FogFar:[3,function(a){this.set(a.fog.far)}],u_Color:[4,function(a,e){const t=a.diffuse;this.setValue(t.r,t.g,t.b)}],u_Opacity:[4,function(a,e){this.set(a.opacity)}],diffuseMap:[4,function(a,e){this.set(a.diffuseMap,e)}],alphaMap:[4,function(a,e){this.set(a.alphaMap,e)}],alphaMapUVTransform:[4,function(a,e){this.set(a.alphaMapTransform.elements)}],normalMap:[4,function(a,e){this.set(a.normalMap,e)}],normalScale:[4,function(a,e){this.setValue(a.normalScale.x,a.normalScale.y)}],bumpMap:[4,function(a,e){this.set(a.bumpMap,e)}],bumpScale:[4,function(a,e){this.set(a.bumpScale)}],cubeMap:[4,function(a,e){this.set(a.cubeMap,e)}],u_EnvMap_Intensity:[4,function(a,e){this.set(a.envMapIntensity)}],u_Specular:[4,function(a,e){this.set(a.shininess)}],u_SpecularColor:[4,function(a,e){const t=a.specular;this.setValue(t.r,t.g,t.b)}],specularMap:[4,function(a,e){this.set(a.specularMap,e)}],aoMap:[4,function(a,e){this.set(a.aoMap,e)}],aoMapIntensity:[4,function(a,e){this.set(a.aoMapIntensity)}],aoMapUVTransform:[4,function(a,e){this.set(a.aoMapTransform.elements)}],u_Roughness:[4,function(a,e){this.set(a.roughness)}],roughnessMap:[4,function(a,e){this.set(a.roughnessMap,e)}],u_Metalness:[4,function(a,e){this.set(a.metalness)}],metalnessMap:[4,function(a,e){this.set(a.metalnessMap,e)}],u_Clearcoat:[4,function(a,e){this.set(a.clearcoat)}],u_ClearcoatRoughness:[4,function(a,e){this.set(a.clearcoatRoughness)}],clearcoatMap:[4,function(a,e){this.set(a.clearcoatMap,e)}],clearcoatRoughnessMap:[4,function(a,e){this.set(a.clearcoatRoughnessMap,e)}],clearcoatNormalMap:[4,function(a,e){this.set(a.clearcoatNormalMap,e)}],clearcoatNormalScale:[4,function(a,e){this.setValue(a.clearcoatNormalScale.x,a.clearcoatNormalScale.y)}],glossiness:[4,function(a,e){this.set(a.glossiness)}],glossinessMap:[4,function(a,e){this.set(a.glossinessMap,e)}],emissive:[4,function(a,e){const t=a.emissive;this.setValue(t.r,t.g,t.b)}],emissiveMap:[4,function(a,e){this.set(a.emissiveMap,e)}],emissiveMapUVTransform:[4,function(a,e){this.set(a.emissiveMapTransform.elements)}],uvTransform:[4,function(a,e){this.set(a.diffuseMapTransform.elements)}],u_PointSize:[4,function(a,e){this.set(a.size)}],u_PointScale:[5,null],maxMipLevel:[5,function(a,e){this.set(e.get(a).__maxMipLevel||8)}],envMap:[5,function(a,e){this.set(a,e)}],u_EnvMap_Flip:[5,function(a,e){this.set(a.images[0]&&a.images[0].rtt?1:-1)}]},qe=new Me;qe.image={data:new Uint8Array([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]),width:2,height:2};qe.magFilter=R.NEAREST;qe.minFilter=R.NEAREST;qe.generateMipmaps=!1;qe.version++;const Ee=new Me;Ee.image={data:null,width:2,height:2};Ee.version++;Ee.type=b.FLOAT_32_UNSIGNED_INT_24_8_REV;Ee.format=x.DEPTH_STENCIL;Ee.magFilter=R.NEAREST;Ee.minFilter=R.NEAREST;Ee.compare=ht.LESS;Ee.generateMipmaps=!1;Ee.version++;const Fi=new vs,Bi=new ei;function te(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ne(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}const Gi=[];function Nn(a,e){let t=Gi[e];t===void 0&&(t=new Int32Array(e),Gi[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocTexUnit();return t}function Ls(a,e){const t=a.gl,n=a.type,s=a.location,i=a.cache;switch(n){case t.FLOAT:a.setValue=function(r){i[0]!==r&&(t.uniform1f(s,r),i[0]=r)},e?a.set=function(r){te(i,r)||(t.uniform1fv(s,r),ne(i,r))}:a.set=a.setValue;break;case t.SAMPLER_2D:case t.SAMPLER_2D_SHADOW:a.setValue=function(r,o){const c=o.allocTexUnit();o.setTexture2D(r||(n===t.SAMPLER_2D_SHADOW?Ee:qe),c),i[0]!==c&&(t.uniform1i(s,c),i[0]=c)},e?a.set=function(r,o){const c=r.length,l=Nn(o,c);for(let h=0;h!==c;++h)o.setTexture2D(r[h]||(n===t.SAMPLER_2D_SHADOW?Ee:qe),l[h]);te(i,l)||(t.uniform1iv(s,l),ne(i,l))}:a.set=a.setValue;break;case t.SAMPLER_CUBE:case t.SAMPLER_CUBE_SHADOW:a.setValue=function(r,o){const c=o.allocTexUnit();o.setTextureCube(r||Bi,c),i[0]!==c&&(t.uniform1i(s,c),i[0]=c)},e?a.set=function(r,o){const c=r.length,l=Nn(o,c);for(let h=0;h!==c;++h)o.setTextureCube(r[h]||Bi,l[h]);te(i,l)||(t.uniform1iv(s,l),ne(i,l))}:a.set=a.setValue;break;case t.SAMPLER_3D:a.setValue=function(r,o){const c=o.allocTexUnit();o.setTexture3D(r||Fi,c),i[0]!==c&&(t.uniform1i(s,c),i[0]=c)},e?a.set=function(r,o){const c=r.length,l=Nn(o,c);for(let h=0;h!==c;++h)o.setTexture3D(r[h]||Fi,l[h]);te(i,l)||(t.uniform1iv(s,l),ne(i,l))}:a.set=a.setValue;break;case t.BOOL:case t.INT:a.setValue=function(r){i[0]!==r&&(t.uniform1i(s,r),i[0]=r)},e?a.set=function(r){te(i,r)||(t.uniform1iv(s,r),ne(i,r))}:a.set=a.setValue;break;case t.FLOAT_VEC2:a.setValue=function(r,o){(i[0]!==r||i[1]!==o)&&(t.uniform2f(s,r,o),i[0]=r,i[1]=o)},a.set=function(r){te(i,r)||(t.uniform2fv(s,r),ne(i,r))};break;case t.BOOL_VEC2:case t.INT_VEC2:a.setValue=function(r,o){(i[0]!==r||i[1]!==o)&&(t.uniform2i(s,r,o),i[0]=r,i[1]=o)},a.set=function(r){te(i,r)||(t.uniform2iv(s,r),ne(i,r))};break;case t.FLOAT_VEC3:a.setValue=function(r,o,c){(i[0]!==r||i[1]!==o||i[2]!==c)&&(t.uniform3f(s,r,o,c),i[0]=r,i[1]=o,i[2]=c)},a.set=function(r){te(i,r)||(t.uniform3fv(s,r),ne(i,r))};break;case t.BOOL_VEC3:case t.INT_VEC3:a.setValue=function(r,o,c){(i[0]!==r||i[1]!==o||i[2]!==c)&&(t.uniform3i(s,r,o,c),i[0]=r,i[1]=o,i[2]=c)},a.set=function(r){te(i,r)||(t.uniform3iv(s,r),ne(i,r))};break;case t.FLOAT_VEC4:a.setValue=function(r,o,c,l){(i[0]!==r||i[1]!==o||i[2]!==c||i[3]!==l)&&(t.uniform4f(s,r,o,c,l),i[0]=r,i[1]=o,i[2]=c,i[3]=l)},a.set=function(r){te(i,r)||(t.uniform4fv(s,r),ne(i,r))};break;case t.BOOL_VEC4:case t.INT_VEC4:a.setValue=function(r,o,c,l){(i[0]!==r||i[1]!==o||i[2]!==c||i[3]!==l)&&(t.uniform4i(s,r,o,c,l),i[0]=r,i[1]=o,i[2]=c,i[3]=l)},a.set=function(r){te(i,r)||(t.uniform4iv(s,r),ne(i,r))};break;case t.FLOAT_MAT2:e?a.setValue=a.set=function(r){te(i,r)||(t.uniformMatrix2fv(s,!1,r),ne(i,r))}:a.setValue=a.set=function(r){(i[0]!==r[0]||i[1]!==r[1]||i[2]!==r[2]||i[3]!==r[3])&&(t.uniformMatrix2fv(s,!1,r),i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3])};break;case t.FLOAT_MAT3:e?a.setValue=a.set=function(r){te(i,r)||(t.uniformMatrix3fv(s,!1,r),ne(i,r))}:a.setValue=a.set=function(r){(i[0]!==r[0]||i[1]!==r[1]||i[2]!==r[2]||i[3]!==r[3]||i[4]!==r[4]||i[5]!==r[5]||i[6]!==r[6]||i[7]!==r[7]||i[8]!==r[8])&&(t.uniformMatrix3fv(s,!1,r),i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8])};break;case t.FLOAT_MAT4:e?a.setValue=a.set=function(r){te(i,r)||(t.uniformMatrix4fv(s,!1,r),ne(i,r))}:a.setValue=a.set=function(r){(i[0]!==r[0]||i[1]!==r[1]||i[2]!==r[2]||i[3]!==r[3]||i[4]!==r[4]||i[5]!==r[5]||i[6]!==r[6]||i[7]!==r[7]||i[8]!==r[8]||i[9]!==r[9]||i[10]!==r[10]||i[11]!==r[11]||i[12]!==r[12]||i[13]!==r[13]||i[14]!==r[14]||i[15]!==r[15])&&(t.uniformMatrix4fv(s,!1,r),i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15])};break}}class Ho{constructor(e,t,n,s){this.gl=e,this.id=t,this.type=n.type,this.location=s,this.setValue=void 0,this.set=void 0,this.cache=[],Ls(this),this.internalGroup=0,this.internalFun=null;const i=zo[t];i&&(this.internalGroup=i[0],this.internalFun=i[1])}}class Vo{constructor(e,t,n,s){this.gl=e,this.id=t,this.type=n.type,this.size=n.size,this.location=s,this.setValue=void 0,this.set=void 0,this.cache=[],Ls(this,!0)}}class Ps{constructor(){this.seq=[],this.map={}}}class ko extends Ps{constructor(e){super(),this.id=e}set(e,t){const n=this.seq;for(let s=0,i=n.length;s!==i;++s){const r=n[s];r.set(e[r.id],t)}}}const Ln=/(\w+)(\])?(\[|\.)?/g;function zi(a,e){a.seq.push(e),a.map[e.id]=e}function Wo(a,e,t,n){const s=e.name,i=s.length;for(Ln.lastIndex=0;;){const r=Ln.exec(s),o=Ln.lastIndex;let c=r[1];const l=r[2]==="]",h=r[3];if(l&&(c=c|0),h===void 0||h==="["&&o+2===i){zi(n,h===void 0?new Ho(a,c,e,t):new Vo(a,c,e,t));break}else{let f=n.map[c];f===void 0&&(f=new ko(c),zi(n,f)),n=f}}}class Xo extends Ps{constructor(e,t){super();const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),r=e.getUniformLocation(t,i.name);Wo(e,i,r,this)}}set(e,t,n){const s=this.map[e];s!==void 0&&s.set(t,n)}has(e){return!!this.map[e]}}let qo=0;class Yo{constructor(e,t,n){this.gl=e,this.vshaderSource=t,this.fshaderSource=n,this.id=qo++,this.usedTimes=1,this.code="",this.lightId=-1,this.lightVersion=-1,this.cameraId=-1,this.cameraVersion=-1,this.sceneId=-1,this.sceneVersion=-1,this.program,this._checkErrors=!0,this._compileAsynchronously=!1,this._status=0;let s,i,r;this.compile=function(l){i=Hi(e,e.VERTEX_SHADER,t),r=Hi(e,e.FRAGMENT_SHADER,n),s=e.createProgram(),e.attachShader(s,i),e.attachShader(s,r),e.linkProgram(s),this.program=s,this._checkErrors=l.checkErrors,this._compileAsynchronously=l.compileAsynchronously,this._status=1,e.deleteShader(i),e.deleteShader(r)},this.isReady=function(l){return this._status===1&&(this._compileAsynchronously&&l?e.getProgramParameter(s,l.COMPLETION_STATUS_KHR)&&(this._status=2,this._tryCheckErrors()):(this._status=2,this._tryCheckErrors())),this._status===2},this._tryCheckErrors=function(){if(this._checkErrors&&e.getProgramParameter(s,e.LINK_STATUS)===!1){const l=e.getProgramInfoLog(s).trim(),h=Vi(e,i,"VERTEX"),u=Vi(e,r,"FRAGMENT");this.program=void 0,this._status=0,console.error("Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(s,e.VALIDATE_STATUS)+`

Program Info Log: `+l+`
`+h+`
`+u)}};let o;this.getUniforms=function(){return o===void 0&&(o=new Xo(e,s)),o};let c;this.getAttributes=function(){return c===void 0&&(c=Ko(e,s)),c},this.dispose=function(){e.deleteProgram(s),this.program=void 0,this._status=0}}}function Qo(a,e){const t=a.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let r=s;r<i;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Hi(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}function Vi(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),s=a.getShaderInfoLog(e).trim();if(n&&s==="")return"";const i=/ERROR: 0:(\d+)/.exec(s);if(i){const r=parseInt(i[1]);return t+`

`+s+`

`+Qo(a.getShaderSource(e),r)}else return s}function Ko(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=a.getActiveAttrib(e,s);t[i.name]=new Do(a,e,i)}return t}class jo{constructor(e,t,n){this._gl=e,this._state=t,this._capabilities=n,this._programs=[]}getProgram(e,t,n,s){const i=this._programs,r=Jo(this._state,this._capabilities,e,t,n),o=Zo(r,e);let c;for(let l=0,h=i.length;l<h;l++){const u=i[l];if(u.code===o){c=u,++c.usedTimes;break}}if(c===void 0){const l=$o(e.defines),h=zt[e.type+"_vert"]||e.vertexShader||zt.basic_vert,u=zt[e.type+"_frag"]||e.fragmentShader||zt.basic_frag;c=tc(this._gl,l,r,h,u),c.compile(s),c.code=o,i.push(c)}return c}releaseProgram(e){if(--e.usedTimes===0){const t=this._programs,n=t.indexOf(e);t[n]=t[t.length-1],t.pop(),e.dispose(this._gl)}}}function Zo(a,e){let t="";for(const n in a)t+=a[n]+"_";for(const n in e.defines)t+=n+"_"+e.defines[n]+"_";return e.type===Ue.SHADER&&!e.shaderName&&(t+=e.vertexShader,t+=e.fragmentShader),t}function $o(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jo(a,e,t,n,s){const i=t.acceptLight?s.lights:null,r=t.fog?s.scene.fog:null,o=t.envMap!==void 0?t.envMap||s.scene.environment:null,c=s.scene.logarithmicDepthBuffer,l=s.scene.disableShadowSampler,h=t.clippingPlanes&&t.clippingPlanes.length>0?t.clippingPlanes.length:s.scene.numClippingPlanes,u={};u.shaderName=t.type===Ue.SHADER&&t.shaderName?t.shaderName:t.type,u.version=e.version,u.precision=t.precision||e.maxPrecision,u.useStandardDerivatives=e.version>=2||!!e.getExtension("OES_standard_derivatives")||!!e.getExtension("GL_OES_standard_derivatives"),u.useShaderTextureLOD=e.version>=2||!!e.getExtension("EXT_shader_texture_lod"),u.useDiffuseMap=t.diffuseMap?t.diffuseMapCoord+1:0,u.useAlphaMap=t.alphaMap?t.alphaMapCoord+1:0,u.useEmissiveMap=t.emissiveMap?t.emissiveMapCoord+1:0,u.useAOMap=t.aoMap?t.aoMapCoord+1:0,u.useNormalMap=!!t.normalMap,u.useBumpMap=!!t.bumpMap,u.useSpecularMap=!!t.specularMap,u.useRoughnessMap=!!t.roughnessMap,u.useMetalnessMap=!!t.metalnessMap,u.useGlossinessMap=!!t.glossinessMap,u.useEnvMap=!!o,u.envMapCombine=t.envMapCombine,u.useClearcoat=t.clearcoat>0,u.useClearcoatMap=u.useClearcoat&&!!t.clearcoatMap,u.useClearcoatRoughnessMap=u.useClearcoat&&!!t.clearcoatRoughnessMap,u.useClearcoatNormalMap=u.useClearcoat&&!!t.clearcoatNormalMap,u.useUv1=u.useDiffuseMap===1||u.useAlphaMap===1||u.useEmissiveMap===1||u.useAOMap===1||u.useNormalMap||u.useBumpMap||u.useSpecularMap||u.useRoughnessMap||u.useMetalnessMap||u.useGlossinessMap||u.useClearcoatMap||u.useClearcoatNormalMap||u.useClearcoatRoughnessMap,u.useUv2=u.useDiffuseMap===2||u.useAlphaMap===2||u.useEmissiveMap===2||u.useAOMap===2,u.useAmbientLight=!!i&&i.useAmbient,u.useSphericalHarmonicsLight=!!i&&i.useSphericalHarmonics,u.hemisphereLightNum=i?i.hemisNum:0,u.directLightNum=i?i.directsNum:0,u.pointLightNum=i?i.pointsNum:0,u.spotLightNum=i?i.spotsNum:0,u.directShadowNum=n.receiveShadow&&i?i.directShadowNum:0,u.pointShadowNum=n.receiveShadow&&i?i.pointShadowNum:0,u.spotShadowNum=n.receiveShadow&&i?i.spotShadowNum:0,u.useShadow=n.receiveShadow&&!!i&&i.shadowsNum>0,u.useShadowSampler=e.version>=2&&!l,u.shadowType=n.shadowType,!u.useShadowSampler&&u.shadowType!==ae.HARD&&(u.shadowType=ae.POISSON_SOFT),u.dithering=t.dithering;const f=a.currentRenderTarget;u.gammaFactor=s.gammaFactor,u.outputEncoding=f.texture?Ht(f.texture):s.outputEncoding,u.diffuseMapEncoding=Ht(t.diffuseMap||t.cubeMap),u.envMapEncoding=Ht(o),u.emissiveMapEncoding=Ht(t.emissiveMap),u.alphaTest=t.alphaTest,u.premultipliedAlpha=t.premultipliedAlpha,u.useVertexColors=t.vertexColors,u.useVertexTangents=!!t.normalMap&&t.vertexTangents,u.numClippingPlanes=h,u.flatShading=t.shading===ct.FLAT_SHADING,u.fog=!!r,u.fogExp2=!!r&&r.isFogExp2,u.sizeAttenuation=t.sizeAttenuation,u.doubleSided=t.side===ue.DOUBLE,u.flipSided=t.side===ue.BACK,u.packDepthToRGBA=t.packToRGBA,u.logarithmicDepthBuffer=!!c,u.rendererExtensionFragDepth=e.version>=2||!!e.getExtension("EXT_frag_depth"),u.morphTargets=!!n.morphTargetInfluences,u.morphNormals=!!n.morphTargetInfluences&&n.geometry.morphAttributes.normal;const d=n.isSkinnedMesh&&n.skeleton,p=e.maxVertexUniformVectors,_=e.maxVertexTextures>0&&(!!e.getExtension("OES_texture_float")||e.version>=2);let g=0;return _?g=1024:(g=n.skeleton?n.skeleton.bones.length:0,g*16>p&&(console.warn("Program: too many bones ("+g+"), current cpu only support "+Math.floor(p/16)+" bones!!"),g=Math.floor(p/16))),u.useSkinning=d,u.bonesNum=g,u.useVertexTexture=_,u}function Ht(a){let e;return a?a.encoding&&(e=a.encoding):e=he.LINEAR,e}function bs(a){switch(a){case he.LINEAR:return["Linear","(value)"];case he.SRGB:return["sRGB","(value)"];case he.GAMMA:return["Gamma","(value, float(GAMMA_FACTOR))"];default:console.error("unsupported encoding: "+a)}}function Pn(a,e){const t=bs(e);return"vec4 "+a+"(vec4 value) { return "+t[0]+"ToLinear"+t[1]+"; }"}function ec(a,e){const t=bs(e);return"vec4 "+a+"(vec4 value) { return LinearTo"+t[0]+t[1]+"; }"}function tc(a,e,t,n,s){let i=["precision "+t.precision+" float;","precision "+t.precision+" int;","precision "+t.precision+" sampler2D;","#define SHADER_NAME "+t.shaderName,e,t.version>=2?"#define WEBGL2":"",t.useRoughnessMap?"#define USE_ROUGHNESSMAP":"",t.useMetalnessMap?"#define USE_METALNESSMAP":"",t.useGlossinessMap?"#define USE_GLOSSINESSMAP":"",t.useAmbientLight?"#define USE_AMBIENT_LIGHT":"",t.useSphericalHarmonicsLight?"#define USE_SPHERICALHARMONICS_LIGHT":"",t.useNormalMap?"#define USE_NORMAL_MAP":"",t.useBumpMap?"#define USE_BUMPMAP":"",t.useSpecularMap?"#define USE_SPECULARMAP":"",t.useEmissiveMap?"#define USE_EMISSIVEMAP "+t.useEmissiveMap:"",t.useShadow?"#define USE_SHADOW":"",t.flatShading?"#define FLAT_SHADED":"",t.flipSided?"#define FLIP_SIDED":"",t.useDiffuseMap?"#define USE_DIFFUSE_MAP "+t.useDiffuseMap:"",t.useAlphaMap?"#define USE_ALPHA_MAP "+t.useAlphaMap:"",t.useEnvMap?"#define USE_ENV_MAP":"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useAOMap?"#define USE_AOMAP "+t.useAOMap:"",t.useVertexColors==Ve.RGB?"#define USE_VCOLOR_RGB":"",t.useVertexColors==Ve.RGBA?"#define USE_VCOLOR_RGBA":"",t.useVertexTangents?"#define USE_TANGENT":"",t.useUv1?"#define USE_UV1":"",t.useUv2?"#define USE_UV2":"",t.fog?"#define USE_FOG":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.useSkinning?"#define USE_SKINNING":"",t.bonesNum>0?"#define MAX_BONES "+t.bonesNum:"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",`
`].filter(ki).join(`
`),r=[t.useStandardDerivatives&&t.version<2?"#extension GL_OES_standard_derivatives : enable":"",t.useShaderTextureLOD&&t.version<2?"#extension GL_EXT_shader_texture_lod : enable":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth&&t.version<2?"#extension GL_EXT_frag_depth : enable":"","precision "+t.precision+" float;","precision "+t.precision+" int;","precision "+t.precision+" sampler2D;",t.version>=2?"precision "+t.precision+" sampler2DShadow;":"",t.version>=2?"precision "+t.precision+" samplerCubeShadow;":"","#define SHADER_NAME "+t.shaderName,"#define PI 3.14159265359","#define EPSILON 1e-6","float pow2(const in float x) { return x * x; }","#define LOG2 1.442695","#define RECIPROCAL_PI 0.31830988618","#define saturate(a) clamp(a, 0.0, 1.0)","#define whiteCompliment(a) (1.0 - saturate(a))","highp float rand(const in vec2 uv) {","	const highp float a = 12.9898, b = 78.233, c = 43758.5453;","	highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);","	return fract(sin(sn) * c);","}",e,t.version>=2?"#define WEBGL2":"",t.useShadowSampler?"#define USE_SHADOW_SAMPLER":"#define sampler2DShadow sampler2D",t.useRoughnessMap?"#define USE_ROUGHNESSMAP":"",t.useMetalnessMap?"#define USE_METALNESSMAP":"",t.useGlossinessMap?"#define USE_GLOSSINESSMAP":"",t.useClearcoat?"#define USE_CLEARCOAT":"",t.useClearcoatMap?"#define USE_CLEARCOATMAP":"",t.useClearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.useClearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.useAmbientLight?"#define USE_AMBIENT_LIGHT":"",t.useSphericalHarmonicsLight?"#define USE_SPHERICALHARMONICS_LIGHT":"",t.useNormalMap?"#define USE_NORMAL_MAP":"",t.useBumpMap?"#define USE_BUMPMAP":"",t.useSpecularMap?"#define USE_SPECULARMAP":"",t.useEmissiveMap?"#define USE_EMISSIVEMAP "+t.useEmissiveMap:"",t.useShadow?"#define USE_SHADOW":"",t.shadowType===ae.HARD?"#define USE_HARD_SHADOW":"",t.shadowType===ae.POISSON_SOFT?"#define USE_POISSON_SOFT_SHADOW":"",t.shadowType===ae.PCF3_SOFT?"#define USE_PCF3_SOFT_SHADOW":"",t.shadowType===ae.PCF5_SOFT?"#define USE_PCF5_SOFT_SHADOW":"",t.shadowType===ae.PCSS16_SOFT?"#define USE_PCSS16_SOFT_SHADOW":"",t.shadowType===ae.PCSS32_SOFT?"#define USE_PCSS32_SOFT_SHADOW":"",t.shadowType===ae.PCSS64_SOFT?"#define USE_PCSS64_SOFT_SHADOW":"",t.shadowType===ae.PCSS16_SOFT||t.shadowType===ae.PCSS32_SOFT||t.shadowType===ae.PCSS64_SOFT?"#define USE_PCSS_SOFT_SHADOW":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.useShaderTextureLOD?"#define TEXTURE_LOD_EXT":"",t.useDiffuseMap?"#define USE_DIFFUSE_MAP "+t.useDiffuseMap:"",t.useAlphaMap?"#define USE_ALPHA_MAP "+t.useAlphaMap:"",t.useEnvMap?"#define USE_ENV_MAP":"",t.useAOMap?"#define USE_AOMAP "+t.useAOMap:"",t.useVertexColors==Ve.RGB?"#define USE_VCOLOR_RGB":"",t.useVertexColors==Ve.RGBA?"#define USE_VCOLOR_RGBA":"",t.useVertexTangents?"#define USE_TANGENT":"",t.premultipliedAlpha?"#define USE_PREMULTIPLIED_ALPHA":"",t.fog?"#define USE_FOG":"",t.fogExp2?"#define USE_EXP2_FOG":"",t.alphaTest?"#define ALPHATEST "+t.alphaTest:"",t.useEnvMap?"#define "+t.envMapCombine:"","#define GAMMA_FACTOR "+t.gammaFactor,t.useUv1?"#define USE_UV1":"",t.useUv2?"#define USE_UV2":"",t.dithering?"#define DITHERING":"",Ns.encodings_pars_frag,Pn("mapTexelToLinear",t.diffuseMapEncoding),t.useEnvMap?Pn("envMapTexelToLinear",t.envMapEncoding):"",t.useEmissiveMap?Pn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",ec("linearToOutputTexel",t.outputEncoding),t.packDepthToRGBA?"#define DEPTH_PACKING_RGBA":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",`
`].filter(ki).join(`
`),o=n,c=s;if(o=Zn(o),c=Zn(c),o=Wi(o,t),c=Wi(c,t),o=Xi(o,t),c=Xi(c,t),o=qi(o),c=qi(c),t.version>1){i=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+i,c=c.replace("#extension GL_EXT_draw_buffers : require","");let l=0;const h=[];for(;c.indexOf("gl_FragData["+l+"]")>-1;)c=c.replace("gl_FragData["+l+"]","pc_fragData"+l),h.push("layout(location = "+l+") out highp vec4 pc_fragData"+l+";"),l++;r=[`#version 300 es
`,"#define varying in",c.indexOf("layout")>-1||h.length>0?"":"out highp vec4 pc_fragColor;","#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad",h.join(`
`)].join(`
`)+`
`+r}return o=i+o,c=r+c,new Yo(a,o,c)}const Zn=function(a){const e=/#include +<([\w\d.]+)>/g;function t(n,s){const i=Ns[s];if(i===void 0)throw new Error("Can not resolve #include <"+s+">");return Zn(i)}return a.replace(e,t)};function ki(a){return a!==""}function Wi(a,e){return a.replace(/NUM_HEMI_LIGHTS/g,e.hemisphereLightNum).replace(/NUM_DIR_LIGHTS/g,e.directLightNum).replace(/NUM_SPOT_LIGHTS/g,e.spotLightNum).replace(/NUM_POINT_LIGHTS/g,e.pointLightNum).replace(/NUM_DIR_SHADOWS/g,e.directShadowNum).replace(/NUM_SPOT_SHADOWS/g,e.spotShadowNum).replace(/NUM_POINT_SHADOWS/g,e.pointShadowNum)}function Xi(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes)}const nc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(a,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"["+i+"]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function qi(a){return a.replace(nc,ic)}class sc extends Fe{constructor(e,t,n){super(e),this._gl=t,this._capabilities=n;const s=n.timerQuery,i=this,r=o=>{const c=o.target,l=i.get(c);c.removeEventListener("dispose",r),l._webglQuery&&(n.version>1?t.deleteQuery(l._webglQuery):s.deleteQueryEXT(l._webglQuery)),i.delete(c)};this._onQueryDispose=r,this._typeToGL={[an.ANY_SAMPLES_PASSED]:35887,[an.ANY_SAMPLES_PASSED_CONSERVATIVE]:36202,[an.TIME_ELAPSED]:35007}}_get(e){const t=this._capabilities,n=this.get(e);return n._webglQuery===void 0&&(e.addEventListener("dispose",this._onQueryDispose),n._webglQuery=t.version>1?this._gl.createQuery():t.timerQuery.createQueryEXT(),n._target=null,n._result=null),n}begin(e,t){const n=this._capabilities,s=this._typeToGL,i=this._get(e);n.version>1?this._gl.beginQuery(s[t],i._webglQuery):n.timerQuery.beginQueryEXT(s[t],i._webglQuery),i._target=t,i._result=null}end(e){const t=this._capabilities,n=this._typeToGL,s=this._get(e);t.version>1?this._gl.endQuery(n[s._target]):t.timerQuery.endQueryEXT(n[s._target])}counter(e){const t=this._capabilities.timerQuery,n=this._get(e);t.queryCounterEXT(n._webglQuery,t.TIMESTAMP_EXT),n._target=t.TIMESTAMP_EXT,n._result=null}isResultAvailable(e){const t=this._gl,n=this._capabilities,s=n.timerQuery,i=this._get(e);let r;return n.version>1?r=t.getQueryParameter(i._webglQuery,t.QUERY_RESULT_AVAILABLE):r=s.getQueryObjectEXT(i._webglQuery,s.QUERY_RESULT_AVAILABLE),r}isTimerDisjoint(){return this._gl.getParameter(this._capabilities.timerQuery.GPU_DISJOINT_EXT)}getResult(e){const t=this._gl,n=this._capabilities,s=n.timerQuery,i=this._get(e);return i._result===null&&(n.version>1?i._result=t.getQueryParameter(i._webglQuery,t.QUERY_RESULT):i._result=s.getQueryObjectEXT(i._webglQuery,s.QUERY_RESULT_EXT)),i._result}}class rc{constructor(e,t){this._gl=e,this._capabilities=t}getGLType(e){const t=this._gl,n=this._capabilities,s=n.version>=2;if(e===b.UNSIGNED_BYTE)return t.UNSIGNED_BYTE;if(e===b.UNSIGNED_SHORT_5_6_5)return t.UNSIGNED_SHORT_5_6_5;if(e===b.UNSIGNED_SHORT_4_4_4_4)return t.UNSIGNED_SHORT_4_4_4_4;if(e===b.UNSIGNED_SHORT_5_5_5_1)return t.UNSIGNED_SHORT_5_5_5_1;let i;if(s){if(e===b.UNSIGNED_SHORT)return t.UNSIGNED_SHORT;if(e===b.UNSIGNED_INT)return t.UNSIGNED_INT;if(e===b.UNSIGNED_INT_24_8)return t.UNSIGNED_INT_24_8;if(e===b.FLOAT)return t.FLOAT;if(e===b.HALF_FLOAT)return t.HALF_FLOAT;if(e===b.FLOAT_32_UNSIGNED_INT_24_8_REV)return t.FLOAT_32_UNSIGNED_INT_24_8_REV;if(e===b.BYTE)return t.BYTE;if(e===b.SHORT)return t.SHORT;if(e===b.INT)return t.INT}else{if(e===b.UNSIGNED_SHORT||e===b.UNSIGNED_INT||e===b.UNSIGNED_INT_24_8)if(i=n.getExtension("WEBGL_depth_texture"),i){if(e===b.UNSIGNED_SHORT)return t.UNSIGNED_SHORT;if(e===b.UNSIGNED_INT)return t.UNSIGNED_INT;if(e===b.UNSIGNED_INT_24_8)return i.UNSIGNED_INT_24_8_WEBGL}else return console.warn("extension WEBGL_depth_texture is not support."),null;if(e===b.FLOAT)return i=n.getExtension("OES_texture_float"),i?t.FLOAT:(console.warn("extension OES_texture_float is not support."),null);if(e===b.HALF_FLOAT)return i=n.getExtension("OES_texture_half_float"),i?i.HALF_FLOAT_OES:(console.warn("extension OES_texture_half_float is not support."),null)}return t[e]!==void 0?t[e]:e}getGLFormat(e){const t=this._gl,n=this._capabilities;if(e===x.RGB)return t.RGB;if(e===x.RGBA)return t.RGBA;if(e===x.ALPHA)return t.ALPHA;if(e===x.LUMINANCE)return t.LUMINANCE;if(e===x.LUMINANCE_ALPHA)return t.LUMINANCE_ALPHA;if(e===x.DEPTH_COMPONENT)return t.DEPTH_COMPONENT;if(e===x.DEPTH_STENCIL)return t.DEPTH_STENCIL;if(e===x.RED)return t.RED;if(e===x.RED_INTEGER)return t.RED_INTEGER;if(e===x.RG)return t.RG;if(e===x.RG_INTEGER)return t.RG_INTEGER;if(e===x.RGB_INTEGER)return t.RGB_INTEGER;if(e===x.RGBA_INTEGER)return t.RGBA_INTEGER;let s;if(e===x.RGB_S3TC_DXT1||e===x.RGBA_S3TC_DXT1||e===x.RGBA_S3TC_DXT3||e===x.RGBA_S3TC_DXT5)if(s=n.getExtension("WEBGL_compressed_texture_s3tc"),s){if(e===x.RGB_S3TC_DXT1)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===x.RGBA_S3TC_DXT1)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===x.RGBA_S3TC_DXT3)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===x.RGBA_S3TC_DXT5)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return console.warn("extension WEBGL_compressed_texture_s3tc is not support."),null;if(e===x.RGB_PVRTC_4BPPV1||e===x.RGB_PVRTC_2BPPV1||e===x.RGBA_PVRTC_4BPPV1||e===x.RGBA_PVRTC_2BPPV1)if(s=n.getExtension("WEBGL_compressed_texture_pvrtc"),s){if(e===x.RGB_PVRTC_4BPPV1)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===x.RGB_PVRTC_2BPPV1)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===x.RGBA_PVRTC_4BPPV1)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===x.RGBA_PVRTC_2BPPV1)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return console.warn("extension WEBGL_compressed_texture_pvrtc is not support."),null;return e===x.RGB_ETC1?(s=n.getExtension("WEBGL_compressed_texture_etc1"),s?s.COMPRESSED_RGB_ETC1_WEBGL:(console.warn("extension WEBGL_compressed_texture_etc1 is not support."),null)):e===x.RGBA_ASTC_4x4?(s=n.getExtension("WEBGL_compressed_texture_astc"),s?s.COMPRESSED_RGBA_ASTC_4x4_KHR:(console.warn("extension WEBGL_compressed_texture_astc is not support."),null)):e===x.RGBA_BPTC?(s=n.getExtension("EXT_texture_compression_bptc"),s?s.COMPRESSED_RGBA_BPTC_UNORM_EXT:(console.warn("extension EXT_texture_compression_bptc is not support."),null)):t[e]!==void 0?t[e]:e}getGLInternalFormat(e){const t=this._gl,n=this._capabilities,s=n.version>=2;if(e===x.RGBA4)return t.RGBA4;if(e===x.RGB5_A1)return t.RGB5_A1;if(e===x.DEPTH_COMPONENT16)return t.DEPTH_COMPONENT16;if(e===x.STENCIL_INDEX8)return t.STENCIL_INDEX8;if(e===x.DEPTH_STENCIL)return t.DEPTH_STENCIL;let i;if(s){if(e===x.R8)return t.R8;if(e===x.RG8)return t.RG8;if(e===x.RGB8)return t.RGB8;if(e===x.RGBA8)return t.RGBA8;if(e===x.DEPTH_COMPONENT24)return t.DEPTH_COMPONENT24;if(e===x.DEPTH_COMPONENT32F)return t.DEPTH_COMPONENT32F;if(e===x.DEPTH24_STENCIL8)return t.DEPTH24_STENCIL8;if(e===x.DEPTH32F_STENCIL8)return t.DEPTH32F_STENCIL8;if(e===x.R16F||e===x.RG16F||e===x.RGB16F||e===x.RGBA16F||e===x.R32F||e===x.RG32F||e===x.RGB32F||e===x.RGBA32F)if(i=n.getExtension("EXT_color_buffer_float"),i){if(e===x.R16F)return t.R16F;if(e===x.RG16F)return t.RG16F;if(e===x.RGB16F)return t.RGB16F;if(e===x.RGBA16F)return t.RGBA16F;if(e===x.R32F)return t.R32F;if(e===x.RG32F)return t.RG32F;if(e===x.RGB32F)return t.RGB32F;if(e===x.RGBA32F)return t.RGBA32F}else return console.warn("extension EXT_color_buffer_float is not support."),null}else if(e===x.RGBA32F||e===x.RGB32F)if(i=n.getExtension("WEBGL_color_buffer_float"),i){if(e===x.RGBA32F)return i.RGBA32F_EXT;if(e===x.RGB32F)return i.RGB32F_EXT}else return console.warn("extension WEBGL_color_buffer_float is not support."),null;return t[e]!==void 0?t[e]:e}}function Yi(a,e,t,n){const s=new Uint8Array(4),i=a.createTexture();a.bindTexture(e,i),a.texParameteri(e,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(e,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let r=0;r<n;r++)a.texImage2D(t+r,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,s);return i}function ac(a){let e=!1;const t=new de;let n=null;const s=new de(0,0,0,0);return{setMask:function(i){n!==i&&!e&&(a.colorMask(i,i,i,i),n=i)},setLocked:function(i){e=i},setClear:function(i,r,o,c,l){l===!0&&(i*=c,r*=c,o*=c),t.set(i,r,o,c),s.equals(t)===!1&&(a.clearColor(i,r,o,c),s.copy(t))},getClear:function(){return s},reset:function(){e=!1,n=null,s.set(-1,0,0,0)}}}function oc(a,e){let t=!1,n=null,s=null,i=null;return{setTest:function(r){r?e.enable(a.DEPTH_TEST):e.disable(a.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(a.depthMask(r),n=r)},setFunc:function(r){s!==r&&(a.depthFunc(r),s=r)},setLocked:function(r){t=r},setClear:function(r){i!==r&&(a.clearDepth(r),i=r)},reset:function(){t=!1,n=null,s=null,i=null}}}function cc(a,e){let t=!1,n=null,s=null,i=null,r=null,o=null,c=null,l=null,h=null,u=null,f=null,d=null,p=null,_=null,g=null;return{setTest:function(m){m?e.enable(a.STENCIL_TEST):e.disable(a.STENCIL_TEST)},setMask:function(m){n!==m&&!t&&(a.stencilMask(m),n=m)},setFunc:function(m,A,E,M,S,w){(s!==m||i!==A||r!==E||h!==M||u!==S||f!==w)&&(M===null||S===null||w===null?a.stencilFunc(m,A,E):(a.stencilFuncSeparate(a.FRONT,m,A,E),a.stencilFuncSeparate(a.BACK,M,S,w)),s=m,i=A,r=E,h=M,u=S,f=w)},setOp:function(m,A,E,M,S,w){(o!==m||c!==A||l!==E||d!==M||p!==S||_!==w)&&(M===null||S===null||w===null?a.stencilOp(m,A,E):(a.stencilOpSeparate(a.FRONT,m,A,E),a.stencilOpSeparate(a.BACK,M,S,w)),o=m,c=A,l=E,d=M,p=S,_=w)},setLocked:function(m){t=m},setClear:function(m){g!==m&&(a.clearStencil(m),g=m)},reset:function(){t=!1,n=null,s=null,i=null,r=null,o=null,c=null,l=null,h=null,u=null,f=null,d=null,p=null,_=null,g=null}}}class lc{constructor(e,t){this.gl=e,this.capabilities=t,this.colorBuffer=new ac(e),this.depthBuffer=new oc(e,this),this.stencilBuffer=new cc(e,this),this.states={},this.currentBlending=null,this.currentBlendEquation=null,this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendEquationAlpha=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentPremultipliedAlpha=null,this.currentFlipSided=!1,this.currentCullFace=null;const n=e.getParameter(e.VIEWPORT);this.currentViewport=new de().fromArray(n),this.currentLineWidth=null,this.currentPolygonOffsetFactor=null,this.currentPolygonOffsetUnits=null,this.currentProgram=null,this.currentBoundBuffers={},this.currentRenderTarget=null,this.currentTextureSlot=null,this.currentBoundTextures={},this.emptyTextures={},this.emptyTextures[e.TEXTURE_2D]=Yi(e,e.TEXTURE_2D,e.TEXTURE_2D,1),this.emptyTextures[e.TEXTURE_CUBE_MAP]=Yi(e,e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),this.blendEquationToGL={[Ae.ADD]:e.FUNC_ADD,[Ae.SUBTRACT]:e.FUNC_SUBTRACT,[Ae.REVERSE_SUBTRACT]:e.FUNC_REVERSE_SUBTRACT,[Ae.MIN]:e.MIN,[Ae.MAX]:e.MAX},this.blendFactorToGL={[re.ZERO]:e.ZERO,[re.ONE]:e.ONE,[re.SRC_COLOR]:e.SRC_COLOR,[re.SRC_ALPHA]:e.SRC_ALPHA,[re.SRC_ALPHA_SATURATE]:e.SRC_ALPHA_SATURATE,[re.DST_COLOR]:e.DST_COLOR,[re.DST_ALPHA]:e.DST_ALPHA,[re.ONE_MINUS_SRC_COLOR]:e.ONE_MINUS_SRC_COLOR,[re.ONE_MINUS_SRC_ALPHA]:e.ONE_MINUS_SRC_ALPHA,[re.ONE_MINUS_DST_COLOR]:e.ONE_MINUS_DST_COLOR,[re.ONE_MINUS_DST_ALPHA]:e.ONE_MINUS_DST_ALPHA},this.colorBuffer.setClear(0,0,0,1),this.depthBuffer.setClear(1),this.stencilBuffer.setClear(0),this.depthBuffer.setTest(!0),this.depthBuffer.setFunc(ht.LEQUAL),this.setFlipSided(!1),this.setCullFace(Ze.BACK)}enable(e){this.states[e]!==!0&&(this.gl.enable(e),this.states[e]=!0)}disable(e){this.states[e]!==!1&&(this.gl.disable(e),this.states[e]=!1)}setBlending(e,t,n,s,i,r,o,c){const l=this.gl;if(e===ve.NONE){this.disable(l.BLEND);return}if(this.enable(l.BLEND),e!==ve.CUSTOM)(e!==this.currentBlending||c!==this.currentPremultipliedAlpha)&&((this.currentBlendEquation!==Ae.ADD||this.currentBlendEquationAlpha!==Ae.ADD)&&(l.blendEquation(l.FUNC_ADD),this.currentBlendEquation=Ae.ADD,this.currentBlendEquationAlpha=Ae.ADD),e===ve.NORMAL?c?l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA):l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA):e===ve.ADD?c?l.blendFunc(l.ONE,l.ONE):l.blendFunc(l.SRC_ALPHA,l.ONE):e===ve.SUB?l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE):e===ve.MUL?c?l.blendFuncSeparate(l.ZERO,l.SRC_COLOR,l.ZERO,l.SRC_ALPHA):l.blendFunc(l.ZERO,l.SRC_COLOR):console.error("WebGLState: Invalid blending: ",e)),this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null;else{i=i||t,r=r||n,o=o||s;const h=this.blendEquationToGL,u=this.blendFactorToGL;(t!==this.currentBlendEquation||i!==this.currentBlendEquationAlpha)&&(l.blendEquationSeparate(h[t],h[i]),this.currentBlendEquation=t,this.currentBlendEquationAlpha=i),(n!==this.currentBlendSrc||s!==this.currentBlendDst||r!==this.currentBlendSrcAlpha||o!==this.currentBlendDstAlpha)&&(l.blendFuncSeparate(u[n],u[s],u[r],u[o]),this.currentBlendSrc=n,this.currentBlendDst=s,this.currentBlendSrcAlpha=r,this.currentBlendDstAlpha=o)}this.currentBlending=e,this.currentPremultipliedAlpha=c}setFlipSided(e){const t=this.gl;this.currentFlipSided!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),this.currentFlipSided=e)}setCullFace(e){const t=this.gl;e!==Ze.NONE?(this.enable(t.CULL_FACE),e!==this.currentCullFace&&(e===Ze.BACK?t.cullFace(t.BACK):e===Ze.FRONT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):this.disable(t.CULL_FACE),this.currentCullFace=e}viewport(e,t,n,s){const i=this.currentViewport;(i.x!==e||i.y!==t||i.z!==n||i.w!==s)&&(this.gl.viewport(e,t,n,s),i.set(e,t,n,s))}setLineWidth(e){if(e!==this.currentLineWidth){const t=this.capabilities.lineWidthRange;t[0]<=e&&e<=t[1]?this.gl.lineWidth(e):console.warn("GL_ALIASED_LINE_WIDTH_RANGE is ["+t[0]+","+t[1]+"], but set to "+e+"."),this.currentLineWidth=e}}setPolygonOffset(e,t,n){const s=this.gl;e?(this.enable(s.POLYGON_OFFSET_FILL),(this.currentPolygonOffsetFactor!==t||this.currentPolygonOffsetUnits!==n)&&(s.polygonOffset(t,n),this.currentPolygonOffsetFactor=t,this.currentPolygonOffsetUnits=n)):this.disable(s.POLYGON_OFFSET_FILL)}setProgram(e){this.currentProgram!==e&&(this.gl.useProgram(e.program),this.currentProgram=e)}bindBuffer(e,t){const n=this.gl;this.currentBoundBuffers[e]!==t&&(n.bindBuffer(e,t),this.currentBoundBuffers[e]=t)}activeTexture(e){const t=this.gl;e===void 0&&(e=t.TEXTURE0+this.capabilities.maxTextures-1),this.currentTextureSlot!==e&&(t.activeTexture(e),this.currentTextureSlot=e)}bindTexture(e,t){const n=this.gl;this.currentTextureSlot===null&&this.activeTexture();let s=this.currentBoundTextures[this.currentTextureSlot];s===void 0&&(s={type:void 0,texture:void 0},this.currentBoundTextures[this.currentTextureSlot]=s),(s.type!==e||s.texture!==t)&&(n.bindTexture(e,t||this.emptyTextures[e]),s.type=e,s.texture=t)}reset(){const e=this.gl;e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.cullFace(e.BACK),e.frontFace(e.CCW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.lineWidth(1),e.polygonOffset(0,0),e.useProgram(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.activeTexture(e.TEXTURE0),this.colorBuffer.reset(),this.depthBuffer.reset(),this.stencilBuffer.reset(),this.states={},this.currentBlending=null,this.currentBlendEquation=null,this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendEquationAlpha=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentPremultipliedAlpha=null,this.currentFlipSided=!1,this.currentCullFace=null,this.currentViewport.set(0,0,e.canvas.width,e.canvas.height),this.currentLineWidth=null,this.currentPolygonOffsetFactor=null,this.currentPolygonOffsetUnits=null,this.currentProgram=null,this.currentBoundBuffers={},this.currentRenderTarget=null,this.currentTextureSlot=null,this.currentBoundTextures={}}setMaterial(e,t){this.setCullFace(e.side===ue.DOUBLE?Ze.NONE:Ze.BACK);let n=e.side===ue.BACK;t&&(n=!n),this.setFlipSided(n),e.blending===ve.NORMAL&&e.transparent===!1?this.setBlending(ve.NONE):this.setBlending(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),this.depthBuffer.setFunc(e.depthFunc),this.depthBuffer.setTest(e.depthTest),this.depthBuffer.setMask(e.depthWrite),this.colorBuffer.setMask(e.colorWrite);const s=e.stencilTest;this.stencilBuffer.setTest(s),s&&(this.stencilBuffer.setMask(e.stencilWriteMask),this.stencilBuffer.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask,e.stencilFuncBack,e.stencilRefBack,e.stencilFuncMaskBack),this.stencilBuffer.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass,e.stencilFailBack,e.stencilZFailBack,e.stencilZPassBack)),this.setPolygonOffset(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),e.lineWidth!==void 0&&this.setLineWidth(e.lineWidth),e.alphaToCoverage===!0?this.enable(this.gl.SAMPLE_ALPHA_TO_COVERAGE):this.disable(this.gl.SAMPLE_ALPHA_TO_COVERAGE)}}class hc extends Fe{constructor(e,t,n,s,i){super(e),this._gl=t,this._state=n,this._capabilities=s,this._constants=i,this._usedTextureUnits=0;const r=this;function o(c){const l=c.target,h=r.get(l);l.removeEventListener("dispose",o),h.__webglTexture&&!h.__external&&t.deleteTexture(h.__webglTexture),r.delete(l)}this._onTextureDispose=o,this._wrappingToGL={[q.REPEAT]:t.REPEAT,[q.CLAMP_TO_EDGE]:t.CLAMP_TO_EDGE,[q.MIRRORED_REPEAT]:t.MIRRORED_REPEAT},this._filterToGL={[R.NEAREST]:t.NEAREST,[R.LINEAR]:t.LINEAR,[R.NEAREST_MIPMAP_NEAREST]:t.NEAREST_MIPMAP_NEAREST,[R.LINEAR_MIPMAP_NEAREST]:t.LINEAR_MIPMAP_NEAREST,[R.NEAREST_MIPMAP_LINEAR]:t.NEAREST_MIPMAP_LINEAR,[R.LINEAR_MIPMAP_LINEAR]:t.LINEAR_MIPMAP_LINEAR}}allocTexUnit(){const e=this._usedTextureUnits++;return e>=this._capabilities.maxTextures&&console.warn("trying to use "+e+" texture units while this GPU supports only "+this._capabilities.maxTextures),e}resetTextureUnits(){this._usedTextureUnits=0}setTexture2D(e,t){const n=this._gl,s=this._state,i=this._capabilities,r=this._constants;t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.image&&o.__version!==e.version&&(!e.image.rtt||t===void 0)&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),s.activeTexture(t),s.bindTexture(n.TEXTURE_2D,o.__webglTexture);let c=e.image;const l=$i(c);l&&(c=Zi(c,i.maxTextureSize),Qi(e)&&Vt(c)===!1&&i.version<2&&(c=ji(c)));const h=!Vt(c)&&i.version<2;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,h);const u=r.getGLFormat(e.format),f=r.getGLType(e.type),d=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):bn(n,i,u,f),p=e.mipmaps;let _;if(l)if(p.length>0&&!h){for(let g=0,m=p.length;g<m;g++)_=p[g],n.texImage2D(n.TEXTURE_2D,g,d,u,f,_);e.generateMipmaps=!1,o.__maxMipLevel=p.length-1}else n.texImage2D(n.TEXTURE_2D,0,d,u,f,c),o.__maxMipLevel=0;else if(p.length>0&&!h){const g=c.isCompressed;for(let m=0,A=p.length;m<A;m++)_=p[m],g?n.compressedTexImage2D(n.TEXTURE_2D,m,d,_.width,_.height,0,_.data):n.texImage2D(n.TEXTURE_2D,m,d,_.width,_.height,e.border,u,f,_.data);e.generateMipmaps=!1,o.__maxMipLevel=p.length-1}else n.texImage2D(n.TEXTURE_2D,0,d,c.width,c.height,e.border,u,f,c.data),o.__maxMipLevel=0;return e.generateMipmaps&&!h&&this._generateMipmap(n.TEXTURE_2D,e,c.width,c.height),o.__version=e.version,o}return s.activeTexture(t),s.bindTexture(n.TEXTURE_2D,o.__webglTexture),o}setTextureCube(e,t){const n=this._gl,s=this._state,i=this._capabilities,r=this._constants;t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.images.length===6&&o.__version!==e.version&&(!e.images[0].rtt||t===void 0)&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),s.activeTexture(t),s.bindTexture(n.TEXTURE_CUBE_MAP,o.__webglTexture);const c=[];let l=!1;for(let _=0;_<6;_++){let g=e.images[_];const m=$i(g);m&&(g=Zi(g,i.maxTextureSize),Qi(e)&&Vt(g)===!1&&i.version<2&&(g=ji(g))),!Vt(g)&&i.version<2&&(l=!0),c[_]=g,g.__isDom=m}n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,l);const h=r.getGLFormat(e.format),u=r.getGLType(e.type),f=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):bn(n,i,h,u),d=e.mipmaps;let p;for(let _=0;_<6;_++){const g=c[_];if(g.__isDom)if(d.length>0&&!l){for(let A=0,E=d.length;A<E;A++)p=d[A][_],n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,f,h,u,p);o.__maxMipLevel=d.length-1,e.generateMipmaps=!1}else n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,f,h,u,g),o.__maxMipLevel=0;else if(d.length>0&&!l){const A=g.isCompressed;for(let E=0,M=d.length;E<M;E++)p=d[E][_],A?n.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_,E,f,p.width,p.height,0,p.data):n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_,E,f,p.width,p.height,e.border,h,u,p.data);o.__maxMipLevel=d.length-1,e.generateMipmaps=!1}else n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,f,g.width,g.height,e.border,h,u,g.data),o.__maxMipLevel=0}return e.generateMipmaps&&!l&&this._generateMipmap(n.TEXTURE_CUBE_MAP,e,c[0].width,c[0].height),o.__version=e.version,o}return s.activeTexture(t),s.bindTexture(n.TEXTURE_CUBE_MAP,o.__webglTexture),o}setTexture3D(e,t){const n=this._gl,s=this._state,i=this._capabilities,r=this._constants;if(i.version<2){console.warn("Try to use Texture3D but browser not support WebGL2.0");return}t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.image&&o.__version!==e.version&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),s.activeTexture(t),s.bindTexture(n.TEXTURE_3D,o.__webglTexture);const c=e.image;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,!1);const l=r.getGLFormat(e.format),h=r.getGLType(e.type),u=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):bn(n,i,l,h);return n.texImage3D(n.TEXTURE_3D,0,u,c.width,c.height,c.depth,e.border,l,h,c.data),e.generateMipmaps&&this._generateMipmap(n.TEXTURE_3D,e,c.width,c.height),o.__version=e.version,o}return s.activeTexture(t),s.bindTexture(n.TEXTURE_3D,o.__webglTexture),o}setTextureExternal(e,t){const n=this._gl,s=this.get(e);s.__external||(s.__webglTexture?n.deleteTexture(s.__webglTexture):e.addEventListener("dispose",this._onTextureDispose)),s.__webglTexture=t,s.__external=!0}_setTextureParameters(e,t){const n=this._gl,s=this._capabilities,i=this._wrappingToGL,r=this._filterToGL;let o=n.TEXTURE_2D;e.isTextureCube&&(o=n.TEXTURE_CUBE_MAP),e.isTexture3D&&(o=n.TEXTURE_3D);const c=uc(e,t);n.texParameteri(o,n.TEXTURE_WRAP_S,i[c[0]]),n.texParameteri(o,n.TEXTURE_WRAP_T,i[c[1]]),e.isTexture3D&&n.texParameteri(o,n.TEXTURE_WRAP_R,i[c[2]]),n.texParameteri(o,n.TEXTURE_MAG_FILTER,r[c[3]]),n.texParameteri(o,n.TEXTURE_MIN_FILTER,r[c[4]]);const l=s.anisotropyExt;l&&n.texParameterf(o,l.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c[5],s.maxAnisotropy)),s.version>=2&&(c[6]!==void 0?(n.texParameteri(o,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(o,n.TEXTURE_COMPARE_FUNC,c[6])):n.texParameteri(o,n.TEXTURE_COMPARE_MODE,n.NONE))}_generateMipmap(e,t,n,s){this._gl.generateMipmap(e);const r=this.get(t);r.__maxMipLevel=Math.log(Math.max(n,s))*Math.LOG2E}}function Qi(a){return a.wrapS!==q.CLAMP_TO_EDGE||a.wrapT!==q.CLAMP_TO_EDGE||a.minFilter!==R.NEAREST&&a.minFilter!==R.LINEAR}function Ki(a){return a===R.NEAREST||a===R.NEAREST_MIPMAP_LINEAR||a===R.NEAREST_MIPMAP_NEAREST?R.NEAREST:R.LINEAR}function Vt(a){return Xt(a.width)&&Xt(a.height)}function ji(a){if(a instanceof HTMLImageElement||a instanceof HTMLCanvasElement){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.width=_i(a.width),e.height=_i(a.height),e.getContext("2d").drawImage(a,0,0,e.width,e.height),console.warn("image is not power of two ("+a.width+"x"+a.height+"). Resized to "+e.width+"x"+e.height,a),e}return a}function Zi(a,e){if(a.width>e||a.height>e){const t=e/Math.max(a.width,a.height),n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.width=Math.floor(a.width*t),n.height=Math.floor(a.height*t),n.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,n.width,n.height),console.warn("image is too big ("+a.width+"x"+a.height+"). Resized to "+n.width+"x"+n.height,a),n}return a}function uc(a,e){let t=a.wrapS,n=a.wrapT,s=a.wrapR,i=a.magFilter,r=a.minFilter;const o=a.anisotropy,c=a.compare;return e&&(t=q.CLAMP_TO_EDGE,n=q.CLAMP_TO_EDGE,a.isTexture3D&&(s=q.CLAMP_TO_EDGE),(a.wrapS!==q.CLAMP_TO_EDGE||a.wrapT!==q.CLAMP_TO_EDGE)&&console.warn("Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to t3d.TEXTURE_WRAP.CLAMP_TO_EDGE.",a),i=Ki(a.magFilter),r=Ki(a.minFilter),(a.minFilter!==R.NEAREST&&a.minFilter!==R.LINEAR||a.magFilter!==R.NEAREST&&a.magFilter!==R.LINEAR)&&console.warn("Texture is not power of two. Texture.minFilter and Texture.magFilter should be set to t3d.TEXTURE_FILTER.NEAREST or t3d.TEXTURE_FILTER.LINEAR.",a)),[t,n,s,i,r,o,c]}function bn(a,e,t,n){if(e.version>=2===!1)return t;let i=t;return t===a.RED&&(n===a.FLOAT&&(i=a.R32F),n===a.HALF_FLOAT&&(i=a.R16F),n===a.UNSIGNED_BYTE&&(i=a.R8)),t===a.RG&&(n===a.FLOAT&&(i=a.RG32F),n===a.HALF_FLOAT&&(i=a.RG16F),n===a.UNSIGNED_BYTE&&(i=a.RG8)),t===a.RGB&&(n===a.FLOAT&&(i=a.RGB32F),n===a.HALF_FLOAT&&(i=a.RGB16F),n===a.UNSIGNED_BYTE&&(i=a.RGB8)),t===a.RGBA&&(n===a.FLOAT&&(i=a.RGBA32F),n===a.HALF_FLOAT&&(i=a.RGBA16F),n===a.UNSIGNED_BYTE&&(i=a.RGBA8),n===a.UNSIGNED_SHORT_4_4_4_4&&(i=a.RGBA4),n===a.UNSIGNED_SHORT_5_5_5_1&&(i=a.RGB5_A1)),(t===a.DEPTH_COMPONENT||t===a.DEPTH_STENCIL)&&(i=a.DEPTH_COMPONENT16,n===a.FLOAT&&(i=a.DEPTH_COMPONENT32F),n===a.UNSIGNED_INT&&(i=a.DEPTH_COMPONENT24),n===a.UNSIGNED_INT_24_8&&(i=a.DEPTH24_STENCIL8),n===a.FLOAT_32_UNSIGNED_INT_24_8_REV&&(i=a.DEPTH32F_STENCIL8)),(i===a.R16F||i===a.R32F||i===a.RG16F||i===a.RG32F||i===a.RGB16F||i===a.RGB32F||i===a.RGBA16F||i===a.RGBA32F)&&e.getExtension("EXT_color_buffer_float"),i}function $i(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap}class dc extends Fe{constructor(e,t,n,s){super(e),this._gl=t,this._capabilities=n,this._constants=s;const i=this;function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=i.get(c);l.__webglRenderbuffer&&!l.__external&&t.deleteRenderbuffer(l.__webglRenderbuffer),i.delete(c)}this._onRenderBufferDispose=r}setRenderBuffer(e){const t=this._gl,n=this._capabilities,s=this._constants,i=this.get(e);if(i.__webglRenderbuffer===void 0){e.addEventListener("dispose",this._onRenderBufferDispose),i.__webglRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,i.__webglRenderbuffer);const r=s.getGLInternalFormat(e.format);e.multipleSampling>0?(n.version<2&&console.error("render buffer multipleSampling is not support in webgl 1.0."),t.renderbufferStorageMultisample(t.RENDERBUFFER,Math.min(e.multipleSampling,n.maxSamples),r,e.width,e.height)):t.renderbufferStorage(t.RENDERBUFFER,r,e.width,e.height)}else t.bindRenderbuffer(t.RENDERBUFFER,i.__webglRenderbuffer);return i}setRenderBufferExternal(e,t){const n=this._gl,s=this.get(e);s.__external||(s.__webglRenderbuffer?n.deleteRenderbuffer(s.__webglRenderbuffer):e.addEventListener("dispose",this._onRenderBufferDispose)),s.__webglRenderbuffer=t,s.__external=!0}}class fc extends Fe{constructor(e,t,n,s,i,r,o){super(e),this._gl=t,this._state=n,this._capabilities=s,this._textures=i,this._renderBuffers=r,this._constants=o;const c=this;function l(h){const u=h.target;u.removeEventListener("dispose",l);const f=c.get(u);f.__webglFramebuffer&&t.deleteFramebuffer(f.__webglFramebuffer),c.delete(u),n.currentRenderTarget===u&&(n.currentRenderTarget=null)}this._onRenderTargetDispose=l}_setupRenderTarget(e){const t=this._gl,n=this._state,s=this._textures,i=this._renderBuffers,r=this._capabilities,o=this.get(e);e.addEventListener("dispose",this._onRenderTargetDispose);const c=t.createFramebuffer(),l=[];o.__webglFramebuffer=c,o.__drawBuffers=l,e.isRenderTargetCube&&(o.__currentActiveCubeFace=e.activeCubeFace,o.__currentActiveMipmapLevel=e.activeMipmapLevel),t.bindFramebuffer(t.FRAMEBUFFER,c);for(const h in e._attachments){const u=Ji[h];u===t.DEPTH_ATTACHMENT||u===t.DEPTH_STENCIL_ATTACHMENT?r.version<2&&!r.getExtension("WEBGL_depth_texture")&&console.warn("WebGLRenderTargets: extension WEBGL_depth_texture is not support."):u!==t.STENCIL_ATTACHMENT&&l.push(u);const f=e._attachments[h];if(f.isTexture2D){const d=s.setTexture2D(f);t.framebufferTexture2D(t.FRAMEBUFFER,u,t.TEXTURE_2D,d.__webglTexture,0),n.bindTexture(t.TEXTURE_2D,null)}else if(f.isTextureCube){const d=s.setTextureCube(f);t.framebufferTexture2D(t.FRAMEBUFFER,u,t.TEXTURE_CUBE_MAP_POSITIVE_X+e.activeCubeFace,d.__webglTexture,e.activeMipmapLevel),n.bindTexture(t.TEXTURE_CUBE_MAP,null)}else{const d=i.setRenderBuffer(f);t.framebufferRenderbuffer(t.FRAMEBUFFER,u,t.RENDERBUFFER,d.__webglRenderbuffer)}}l.sort(pc),r.version>=2?t.drawBuffers(l):r.getExtension("WEBGL_draw_buffers")&&r.getExtension("WEBGL_draw_buffers").drawBuffersWEBGL(l)}setRenderTarget(e){const t=this._gl,n=this._state,s=this._textures;let i;if(n.currentRenderTarget!==e&&(e.isRenderTargetBack?t.bindFramebuffer(t.FRAMEBUFFER,null):(i=this.get(e),i.__webglFramebuffer===void 0?this._setupRenderTarget(e):t.bindFramebuffer(t.FRAMEBUFFER,i.__webglFramebuffer)),n.currentRenderTarget=e),e.isRenderTargetCube){i=this.get(e);const r=e.activeCubeFace,o=e.activeMipmapLevel;if(i.__currentActiveCubeFace!==r||i.__currentActiveMipmapLevel!==o){for(const c in e._attachments){const l=e._attachments[c];if(l.isTextureCube){const h=s.get(l);t.framebufferTexture2D(t.FRAMEBUFFER,Ji[c],t.TEXTURE_CUBE_MAP_POSITIVE_X+r,h.__webglTexture,o)}}i.__currentActiveCubeFace=r,i.__currentActiveMipmapLevel=o}}}blitRenderTarget(e,t,n=!0,s=!0,i=!0){const r=this._gl,o=this._capabilities;if(o.version<2){console.warn("WebGLRenderTargets: blitFramebuffer not support by WebGL"+o.version);return}const c=this.get(e).__webglFramebuffer,l=this.get(t).__webglFramebuffer;r.bindFramebuffer(r.READ_FRAMEBUFFER,c),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,l);let h=0;n&&(h|=r.COLOR_BUFFER_BIT),s&&(h|=r.DEPTH_BUFFER_BIT),i&&(h|=r.STENCIL_BUFFER_BIT),r.blitFramebuffer(0,0,e.width,e.height,0,0,t.width,t.height,h,r.NEAREST)}readRenderTargetPixels(e,t,n,s,i){const r=this._gl,o=this._state,c=this._constants,l=o.currentRenderTarget;if(l&&l.texture){if(e>=0&&e<=l.width-n&&t>=0&&t<=l.height-s){const h=c.getGLType(l.texture.type),u=c.getGLFormat(l.texture.format);r.readPixels(e,t,n,s,u,h,i)}}else console.warn("WebGLRenderTargets.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not bound or texture not attached.")}updateRenderTargetMipmap(e){const t=this._gl,n=this._state,s=this._capabilities,i=e.texture;if(i.generateMipmaps&&i.minFilter!==R.NEAREST&&i.minFilter!==R.LINEAR&&(_c(e)||s.version>=2)){let r=t.TEXTURE_2D;i.isTextureCube&&(r=t.TEXTURE_CUBE_MAP),i.isTexture3D&&(r=t.TEXTURE_3D);const o=this._textures.get(i).__webglTexture;n.bindTexture(r,o),t.generateMipmap(r),n.bindTexture(r,null)}}}const Ji={[y.COLOR_ATTACHMENT0]:36064,[y.COLOR_ATTACHMENT1]:36065,[y.COLOR_ATTACHMENT2]:36066,[y.COLOR_ATTACHMENT3]:36067,[y.COLOR_ATTACHMENT4]:36068,[y.COLOR_ATTACHMENT5]:36069,[y.COLOR_ATTACHMENT6]:36070,[y.COLOR_ATTACHMENT7]:36071,[y.COLOR_ATTACHMENT8]:36072,[y.COLOR_ATTACHMENT9]:36073,[y.COLOR_ATTACHMENT10]:36074,[y.COLOR_ATTACHMENT11]:36075,[y.COLOR_ATTACHMENT12]:36076,[y.COLOR_ATTACHMENT13]:36077,[y.COLOR_ATTACHMENT14]:36078,[y.COLOR_ATTACHMENT15]:36079,[y.DEPTH_ATTACHMENT]:36096,[y.STENCIL_ATTACHMENT]:36128,[y.DEPTH_STENCIL_ATTACHMENT]:33306};function pc(a,e){return a-e}function _c(a){return Xt(a.width)&&Xt(a.height)}class mc extends Fe{constructor(e,t,n){super(e),this._gl=t,this._capabilities=n}setBuffer(e,t,n){const s=this.get(e),i=s.glBuffer===void 0;!i&&s.version===e.version||(n&&n.reset(),i||s.__external?this._createGLBuffer(s,e,t):(this._updateGLBuffer(s.glBuffer,e,t),s.version=e.version))}removeBuffer(e){const t=this._gl,n=this.get(e);n.glBuffer&&!n.__external&&t.deleteBuffer(n.glBuffer),this.delete(e)}setBufferExternal(e,t){const n=this._gl,s=this.get(e);s.__external||s.glBuffer&&n.deleteBuffer(s.glBuffer);const i=es(n,e.array);s.glBuffer=t,s.type=i,s.bytesPerElement=e.array.BYTES_PER_ELEMENT,s.version=e.version,s.__external=!0}_createGLBuffer(e,t,n){const s=this._gl,i=t.array,r=t.usage,o=s.createBuffer();s.bindBuffer(n,o),s.bufferData(n,i,r),t.onUploadCallback();const c=es(s,i);e.glBuffer=o,e.type=c,e.bytesPerElement=i.BYTES_PER_ELEMENT,e.version=t.version,e.__external=!1}_updateGLBuffer(e,t,n){const s=this._gl,i=this._capabilities,r=t.array,o=t.updateRange;s.bindBuffer(n,e),o.count===-1?s.bufferSubData(n,0,r):(i.version>=2?s.bufferSubData(n,o.offset*r.BYTES_PER_ELEMENT,r,o.offset,o.count):s.bufferSubData(n,o.offset*r.BYTES_PER_ELEMENT,r.subarray(o.offset,o.offset+o.count)),o.count=-1)}}function es(a,e){let t;return e instanceof Float32Array?t=a.FLOAT:e instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array."):e instanceof Uint16Array?t=a.UNSIGNED_SHORT:e instanceof Int16Array?t=a.SHORT:e instanceof Uint32Array?t=a.UNSIGNED_INT:e instanceof Int32Array?t=a.INT:e instanceof Int8Array?t=a.BYTE:e instanceof Uint8Array?t=a.UNSIGNED_BYTE:t=a.FLOAT,t}class gc extends Fe{constructor(e,t,n){super(e);const s=this;function i(r){const o=r.target,c=s.get(o);o.removeEventListener("dispose",i);const l=c.program;l!==void 0&&(n.releaseByProgram(l),t.releaseProgram(l)),s.delete(o)}this._onMaterialDispose=i}setMaterial(e){const t=this.get(e);return t.program===void 0&&e.addEventListener("dispose",this._onMaterialDispose),t}}const Dn="";class Ec extends Fe{constructor(e,t,n,s){super(e),this._gl=t,this._capabilities=n,this._buffers=s,this._isWebGL2=n.version>=2,this._vaoExt=n.getExtension("OES_vertex_array_object"),this._vaoCache={},this._currentGeometryProgram="",this._currentVAO=null}setup(e,t,n){if(e.morphTargetInfluences)this.reset(),this._setupVertexAttributes(n,t),this._currentGeometryProgram=Dn;else if(this._isWebGL2||this._vaoExt){const s=this.get(t);s._vaos===void 0&&(s._vaos={},this._vaoCache[t.id]=s._vaos);let i=s._vaos[n.id];i||(i=s._vaos[n.id]={version:-1,object:this._createVAO()}),this._bindVAO(i.object),i.version!==t.version&&(this._setupVertexAttributes(n,t),i.version=t.version)}else{const s=n.id+"_"+t.id+"_"+t.version;s!==this._currentGeometryProgram&&(this._setupVertexAttributes(n,t),this._currentGeometryProgram=s)}}releaseByGeometry(e){const t=this.get(e),n=t._vaos;if(n){for(const s in n){const i=n[s];i&&this._disposeVAO(i.object)}delete t._vaos,delete this._vaoCache[e.id]}}releaseByProgram(e){for(const t in this._vaoCache){const n=this._vaoCache[t];if(n){const s=n[e.id];if(!s)continue;this._disposeVAO(s.object),delete n[e.id]}}}reset(e){(this._currentVAO!==null||e)&&(this._isWebGL2?this._gl.bindVertexArray(null):this._vaoExt&&this._vaoExt.bindVertexArrayOES(null),this._currentVAO=null),this._currentGeometryProgram!==Dn&&(this._currentGeometryProgram=Dn)}_createVAO(){return this._isWebGL2?this._gl.createVertexArray():this._vaoExt?this._vaoExt.createVertexArrayOES():null}_bindVAO(e){this._currentVAO!==e&&(this._isWebGL2?this._gl.bindVertexArray(e):this._vaoExt&&this._vaoExt.bindVertexArrayOES(e),this._currentVAO=e)}_disposeVAO(e){this._isWebGL2?this._gl.deleteVertexArray(e):this._vaoExt&&this._vaoExt.deleteVertexArrayOES(e)}_setupVertexAttributes(e,t){const n=this._gl,s=this._isWebGL2,i=e.getAttributes(),r=this._capabilities,o=this._buffers;for(const c in i){const l=i[c],h=t.getAttribute(c);if(h){const u=h.size;l.count!==u&&console.warn("WebGLVertexArrayBindings: attribute "+c+" size not match! "+l.count+" : "+u);const f=h.buffer,d=o.get(f),p=d.type;l.format;for(let M=0,S=l.locationSize;M<S;M++)n.enableVertexAttribArray(l.location+M);if(h.divisor>0)for(let M=0,S=l.locationSize;M<S;M++)s?n.vertexAttribDivisor(l.location+M,h.divisor):r.getExtension("ANGLE_instanced_arrays")?r.getExtension("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(l.location+M,h.divisor):console.warn("vertexAttribDivisor not supported");const _=d.bytesPerElement,g=d.glBuffer,m=f.stride,A=h.offset,E=h.normalized;if(n.bindBuffer(n.ARRAY_BUFFER,g),l.count===m&&l.locationSize===1)n.vertexAttribPointer(l.location,l.count,p,E,0,0);else for(let M=0;M<l.locationSize;M++)n.vertexAttribPointer(l.location+M,l.count/l.locationSize,p,E,_*m,_*(A+l.count/l.locationSize*M))}}if(t.index){const c=o.get(t.index.buffer);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,c.glBuffer)}}}const Mc=new de,kt=new O,In=new WeakMap,On=new Float32Array(8);let Un=new Float32Array([]);function Tc(a){return a.geometry}function Sc(a){return a.material}function Ac(a){return!0}function ts(){}class Ds extends Fr{constructor(e){super(e),this.capabilities={},this._textures=null,this._renderBuffers=null,this._renderTargets=null,this._buffers=null,this._geometries=null,this._programs=null,this._materials=null,this._state=null,this._vertexArrayBindings=null,this._queries=null,this.init(),this._currentMaterial=null}init(){const e=this.context,t=`_gl${this.increaseId()}`,n=new Uo(e),s=new rc(e,n),i=new lc(e,n),r=new hc(t,e,i,n,s),o=new dc(t,e,n,s),c=new fc(t,e,i,n,r,o,s),l=new mc(t,e,n),h=new Ec(t,e,n,l),u=new Go(t,e,l,h),f=new jo(e,i,n),d=new gc(t,f,h),p=new sc(t,e,n);this.capabilities=n,this._textures=r,this._renderBuffers=o,this._renderTargets=c,this._buffers=l,this._geometries=u,this._programs=f,this._materials=d,this._state=i,this._vertexArrayBindings=h,this._queries=p}endRender(){super.endRender(),this._currentMaterial=null;const e=this._state;e.depthBuffer.setTest(!0),e.depthBuffer.setMask(!0),e.colorBuffer.setMask(!0)}clear(e,t,n){const s=this.context;let i=0;(e===void 0||e)&&(i|=s.COLOR_BUFFER_BIT),(t===void 0||t)&&(i|=s.DEPTH_BUFFER_BIT),(n===void 0||n)&&(i|=s.STENCIL_BUFFER_BIT),i>0&&s.clear(i)}setClearColor(e,t,n,s,i){this._state.colorBuffer.setClear(e,t,n,s,i)}getClearColor(){return this._state.colorBuffer.getClear()}setRenderTarget(e){this._renderTargets.setRenderTarget(e)}getRenderTarget(){return this._state.currentRenderTarget}blitRenderTarget(e,t,n=!0,s=!0,i=!0){this._renderTargets.blitRenderTarget(e,t,n,s,i)}readRenderTargetPixels(e,t,n,s,i){this._renderTargets.readRenderTargetPixels(e,t,n,s,i)}updateRenderTargetMipmap(e){this._renderTargets.updateRenderTargetMipmap(e)}setTextureExternal(e,t){this._textures.setTextureExternal(e,t)}setRenderBufferExternal(e,t){this._renderBuffers.setRenderBufferExternal(e,t)}setBufferExternal(e,t){this._buffers.setBufferExternal(e,t)}resetVertexArrayBindings(e){this._vertexArrayBindings.reset(e)}resetState(){this._state.reset()}beginQuery(e,t){this._queries.begin(e,t)}endQuery(e){this._queries.end(e)}queryCounter(e){this._queries.counter(e)}isTimerQueryDisjoint(e){return this._queries.isTimerDisjoint(e)}isQueryResultAvailable(e){return this._queries.isResultAvailable(e)}getQueryResult(e){return this._queries.getResult(e)}renderRenderableItem(e,t,n){const s=this._state,i=this.capabilities,r=this._vertexArrayBindings,o=this._textures,c=this._programs,l=this._passInfo,h=n.getGeometry||Tc,u=n.getMaterial||Sc,f=n.beforeRender||ts,d=n.afterRender||ts,p=n.ifRender||Ac,_=n.renderInfo,g=t.scene,m=t.lights,A=t.camera,E=s.currentRenderTarget;if(!p(e))return;if(!l.enabled){console.warn("WebGLRenderer: beginRender must be called before renderRenderableItem.");return}const M=e.object,S=u.call(this,e),w=h.call(this,e),N=e.group,U=S.fog?g.fog:null,D=S.envMap!==void 0?S.envMap||g.environment:null;let Y=g.clippingPlanesData,F=g.numClippingPlanes;S.clippingPlanes&&S.clippingPlanes.length>0&&(Un.length<S.clippingPlanes.length*4&&(Un=new Float32Array(S.clippingPlanes.length*4)),Y=g.setClippingPlanesData(S.clippingPlanes,Un),F=S.clippingPlanes.length),M.onBeforeRender(e,S),f.call(this,e,S);const C=this._materials.setMaterial(S);if(S.needsUpdate===!1)if(C.program===void 0)S.needsUpdate=!0;else if(C.fog!==U)S.needsUpdate=!0;else if(C.envMap!==D)S.needsUpdate=!0;else if(C.numClippingPlanes!==F)S.needsUpdate=!0;else if(C.logarithmicDepthBuffer!==g.logarithmicDepthBuffer)S.needsUpdate=!0;else if(t.outputEncoding!==C.outputEncoding||t.gammaFactor!==C.gammaFactor)S.needsUpdate=!0;else if(i.version>1&&g.disableShadowSampler!==C.disableShadowSampler)S.needsUpdate=!0;else{const B=S.acceptLight&&m.totalNum>0;(B!==C.acceptLight||B&&(!m.hash.compare(C.lightsHash)||M.receiveShadow!==C.receiveShadow||M.shadowType!==C.shadowType))&&(S.needsUpdate=!0)}if(S.needsUpdate){const B=C.program;C.program=c.getProgram(S,M,t,this.shaderCompileOptions),B&&(r.releaseByProgram(B),c.releaseProgram(B)),C.fog=U,C.envMap=D,C.logarithmicDepthBuffer=g.logarithmicDepthBuffer,C.acceptLight=S.acceptLight,C.lightsHash=m.hash.copyTo(C.lightsHash),C.receiveShadow=M.receiveShadow,C.shadowType=M.shadowType,C.numClippingPlanes=F,C.outputEncoding=t.outputEncoding,C.gammaFactor=t.gammaFactor,C.disableShadowSampler=g.disableShadowSampler,S.needsUpdate=!1}const P=C.program;if(n.onlyCompile||!P.isReady(i.parallelShaderCompileExt))return;s.setProgram(P),this._geometries.setGeometry(w,l),M.morphTargetInfluences&&this._updateMorphtargets(M,w,P),r.setup(M,w,P);let j=!1;(P.lightId!==m.id||P.lightVersion!==m.version)&&(j=!0,P.lightId=m.id,P.lightVersion=m.version);let H=!1;(P.cameraId!==A.id||P.cameraVersion!==A.version)&&(H=!0,P.cameraId=A.id,P.cameraVersion=A.version);let pe=!1;(P.sceneId!==g.id||P.sceneVersion!==g.version)&&(pe=!0,P.sceneId=g.id,P.sceneVersion=g.version);let oe=!0;S.forceUpdateUniforms||(C.pass!==l.count?C.pass=l.count:oe=this._currentMaterial!==S),this._currentMaterial=S;const $=P.getUniforms();S.acceptLight&&this._uploadLights($,m,g.disableShadowSampler,j),M.isSkinnedMesh&&this._uploadSkeleton($,M,g);for(let B=0,Te=$.seq.length;B<Te;B++){const Q=$.seq[B],Ce=Q.id,Se=Q.internalGroup;if(S.uniforms&&S.uniforms[Ce]!==void 0){Q.set(S.uniforms[Ce],o);continue}if(Se===1){let Be=M.worldMatrix;g.useAnchorMatrix&&(Be=kt.copy(Be).premultiply(g.anchorMatrixInverse)),Q.set(Be.elements);continue}if(Se===2&&H){Q.internalFun(A);continue}if(Se===3&&pe){Q.internalFun(g);continue}if(Se===4&&oe){Q.internalFun(S,o);continue}if(Se===5){if(Ce==="u_PointScale"){const Be=E.height*.5;Q.set(Be)}else Q.internalFun(D,o);continue}Ce==="clippingPlanes"&&Q.set(Y)}const G=M.worldMatrix.determinant()<0;s.setMaterial(S,G);const I=Mc.set(E.width,E.height,E.width,E.height).multiply(A.rect);I.z-=I.x,I.w-=I.y,I.x=Math.floor(I.x),I.y=Math.floor(I.y),I.z=Math.floor(I.z),I.w=Math.floor(I.w),s.viewport(I.x,I.y,I.z,I.w),this._draw(w,S,N,_),o.resetTextureUnits(),d(e),M.onAfterRender(e)}_uploadLights(e,t,n,s){const i=this._textures;t.useAmbient&&s&&e.set("u_AmbientLightColor",t.ambient),t.useSphericalHarmonics&&s&&e.set("u_SphericalHarmonicsLightData",t.sh),t.hemisNum>0&&s&&e.set("u_Hemi",t.hemisphere),t.directsNum>0&&(s&&e.set("u_Directional",t.directional),t.directShadowNum>0&&(s&&e.set("u_DirectionalShadow",t.directionalShadow),e.has("directionalShadowMap")&&(this.capabilities.version>=2&&!n?e.set("directionalShadowMap",t.directionalShadowDepthMap,i):e.set("directionalShadowMap",t.directionalShadowMap,i),e.set("directionalShadowMatrix",t.directionalShadowMatrix)),e.has("directionalDepthMap")&&e.set("directionalDepthMap",t.directionalShadowMap,i))),t.pointsNum>0&&(s&&e.set("u_Point",t.point),t.pointShadowNum>0&&(s&&e.set("u_PointShadow",t.pointShadow),e.has("pointShadowMap")&&(e.set("pointShadowMap",t.pointShadowMap,i),e.set("pointShadowMatrix",t.pointShadowMatrix)))),t.spotsNum>0&&(s&&e.set("u_Spot",t.spot),t.spotShadowNum>0&&(s&&e.set("u_SpotShadow",t.spotShadow),e.has("spotShadowMap")&&(this.capabilities.version>=2&&!n?e.set("spotShadowMap",t.spotShadowDepthMap,i):e.set("spotShadowMap",t.spotShadowMap,i),e.set("spotShadowMatrix",t.spotShadowMatrix)),e.has("spotDepthMap")&&e.set("spotDepthMap",t.spotShadowMap,i)))}_uploadSkeleton(e,t,n){if(t.skeleton&&t.skeleton.bones.length>0){const s=t.skeleton,i=this.capabilities;i.maxVertexTextures>0&&(i.getExtension("OES_texture_float")||i.version>=2)?(s.boneTexture===void 0&&s.generateBoneTexture(i.version>=2),e.set("boneTexture",s.boneTexture,this._textures),e.set("boneTextureSize",s.boneTexture.image.width)):e.set("boneMatrices",s.boneMatrices),e.set("bindMatrix",t.bindMatrix.elements),kt.copy(t.bindMatrixInverse),n.useAnchorMatrix&&kt.multiply(n.anchorMatrix),e.set("bindMatrixInverse",kt.elements)}}_updateMorphtargets(e,t,n){const s=e.morphTargetInfluences;In.has(t)||In.set(t,s.slice(0));const i=t.morphAttributes.position,r=t.morphAttributes.normal,o=In.get(t);for(let l=0;l<o.length;l++)o[l]!==0&&(i&&t.removeAttribute("morphTarget"+l),r&&t.removeAttribute("morphNormal"+l));for(let l=0;l<s.length;l++)o[l]=s[l];o.length=s.length;let c=0;for(let l=0;l<o.length;l++){const h=o[l];h>0&&(i&&t.addAttribute("morphTarget"+c,i[l]),r&&t.addAttribute("morphNormal"+c,r[l]),On[c]=h,c++)}for(;c<8;c++)On[c]=0;n.getUniforms().set("morphTargetInfluences",On)}_draw(e,t,n,s){const i=this.context,r=this.capabilities,o=this._buffers,c=e.instanceCount,l=c>=0,h=!!n,u=h&&n.multiDrawCount!==void 0,f=e.index!==null;let d=0,p=1/0;if(!u){const _=e.getAttribute("a_Position");if(f?p=e.index.buffer.count:_&&(p=_.buffer.count),h&&(d=Math.max(d,n.start),p=Math.min(p,n.count)),p<0||p===1/0)return}if(f){const _=o.get(e.index.buffer),g=_.bytesPerElement,m=_.type;if(m===i.UNSIGNED_INT&&r.version<2&&!r.getExtension("OES_element_index_uint")&&console.warn("WebGLRenderer: draw elements type not support UNSIGNED_INT!"),l){if(c<=0)return;if(r.version>=2)i.drawElementsInstanced(t.drawMode,p,m,d*g,c);else if(r.getExtension("ANGLE_instanced_arrays"))r.getExtension("ANGLE_instanced_arrays").drawElementsInstancedANGLE(t.drawMode,p,m,d*g,c);else{console.warn("WebGLRenderer: using instanced draw but hardware does not support.");return}}else if(u){if(n.multiDrawCount<=0)return;const A=r.getExtension("WEBGL_multi_draw");if(!A){console.warn("WebGLRenderer: using multi draw but hardware does not support extension WEBGL_multi_draw.");return}A.multiDrawElementsWEBGL(t.drawMode,n.multiDrawCounts,0,m,n.multiDrawStarts,0,n.multiDrawCount)}else i.drawElements(t.drawMode,p,m,d*g)}else if(l){if(c<=0)return;if(r.version>=2)i.drawArraysInstanced(t.drawMode,d,p,c);else if(r.getExtension("ANGLE_instanced_arrays"))r.getExtension("ANGLE_instanced_arrays").drawArraysInstancedANGLE(t.drawMode,d,p,c);else{console.warn("WebGLRenderer: using instanced draw but hardware does not support.");return}}else if(u){if(n.multiDrawCount<=0)return;const _=r.getExtension("WEBGL_multi_draw");if(!_){console.warn("WebGLRenderer: using multi draw but hardware does not support extension WEBGL_multi_draw.");return}_.multiDrawArraysWEBGL(t.drawMode,n.multiDrawStarts,0,n.multiDrawCounts,0,n.multiDrawCount)}else i.drawArrays(t.drawMode,d,p);if(s){if(u){p=0;for(let _=0;_<n.multiDrawCount;_++)p+=n.multiDrawCounts[_]}s.update(p,t.drawMode,c<0?1:c)}}}class vc extends ge{constructor(){super()}}vc.prototype.isGroup=!0;Object.defineProperties(Ds.prototype,{gl:{configurable:!0,get:function(){return this.context}},renderTarget:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .renderTarget has been deprecated. All methods are moved to WebGLRenderer."),this._renderTargets}},state:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .state has been deprecated. All methods are moved to WebGLRenderer."),this._state}},vertexArrayBindings:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .vertexArrayBindings has been deprecated. All methods are moved to WebGLRenderer."),this._vertexArrayBindings}}});Ds.prototype.render=function(a,e,t){this.renderRenderableItem(a,e,t)};Ue.MATCAP="matcap";class yl extends Kt{constructor(e){super(e)}load(e,t,n,s){const i=new Me,r=new ms(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){i.image=o,i.version++,t&&t(i)},n,s),i}}class si extends wt{constructor(e){const t=new Br(1,1,1),n=new Rt(si.SkyBoxShader);n.side=ue.BACK,super(t,n),this.material=n,e&&(this.texture=e),this.frustumCulled=!1}set level(e){this.material.uniforms.level=e}get level(){return this.material.uniforms.level}set gamma(e){this.material.defines.GAMMA=e,this.material.needsUpdate=!0}get gamma(){return this.material.defines.GAMMA}set texture(e){e.isTextureCube?(this.material.cubeMap=e,this.material.uniforms.flip=e.images[0]&&e.images[0].rtt?1:-1,this.material.defines.PANORAMA=!1):(this.material.diffuseMap=e,this.material.uniforms.flip=-1,this.material.defines.PANORAMA=""),this.material.needsUpdate=!0}get texture(){return this.material.diffuseMap||this.material.cubeMap}}si.SkyBoxShader={name:"skybox",defines:{GAMMA:!1,PANORAMA:!1},uniforms:{level:0,flip:-1},vertexShader:`
		#include <common_vert>

		varying vec3 vDir;

		mat4 clearMat4Translate(mat4 m) {
			mat4 outMatrix = m;
			outMatrix[3].xyz = vec3(0., 0., 0.);
			return outMatrix;
		}

		void main() {
			mat4 modelMatrix = clearMat4Translate(u_Model);
			mat4 viewMatrix = clearMat4Translate(u_View);

			vDir = normalize((modelMatrix * vec4(a_Position, 0.0)).xyz);

			gl_Position = u_Projection * viewMatrix * modelMatrix * vec4(a_Position, 1.0);
			gl_Position.z = gl_Position.w;
		}
	`,fragmentShader:`
		#include <common_frag>

		#ifdef PANORAMA
			uniform sampler2D diffuseMap;
		#else
			uniform samplerCube cubeMap;
		#endif

		uniform float flip;
		uniform float level;

		varying vec3 vDir;

		void main() {
			#include <begin_frag>

			vec3 V = normalize(vDir);

			#ifdef PANORAMA
				float phi = acos(V.y);
				// consistent with cubemap.
				// atan(y, x) is same with atan2 ?
				float theta = flip * atan(V.x, V.z) + PI * 0.5;
				vec2 uv = vec2(theta / 2.0 / PI, -phi / PI);
				#ifdef TEXTURE_LOD_EXT
					outColor *= mapTexelToLinear(texture2DLodEXT(diffuseMap, fract(uv), level));
				#else
					outColor *= mapTexelToLinear(texture2D(diffuseMap, fract(uv), level));
				#endif
			#else
				vec3 coordVec = vec3(flip * V.x, V.yz);
				#ifdef TEXTURE_LOD_EXT
					outColor *= mapTexelToLinear(textureCubeLodEXT(cubeMap, coordVec, level));
				#else
					outColor *= mapTexelToLinear(textureCube(cubeMap, coordVec, level));
				#endif
			#endif

			#include <end_frag>
			#ifdef GAMMA
				#include <encodings_frag>
			#endif
		}
	`};class xc extends Kt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader,fetch(e,r).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){t&&t(o),i.manager.itemEnd(e)}).catch(function(o){s&&s(o),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}const yc="\\[\\]\\.:\\/",wc=new RegExp("["+yc+"]","g");class ie{constructor(){}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wc,"")}static extractUrlBase(e){const t=e.split("/");return t.pop(),(t.length<1?".":t.join("/"))+"/"}static resolveURL(e,t){return typeof e!="string"||e===""?"":/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e}static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static parseGLB(e){const i={JSON:1313821514,BIN:5130562},r=new DataView(e),o={magic:r.getUint32(0,!0),version:r.getUint32(4,!0),length:r.getUint32(2*4,!0)};if(o.magic!==1179937895)return console.error("Invalid glb magic number. Expected 0x46546C67, found 0x"+o.magic.toString(16)),null;o.version<2&&console.error("GLTFLoader: Legacy binary file detected.");let c=r.getUint32(12,!0),l=r.getUint32(12+4,!0);if(l!==i.JSON)return console.error("Invalid glb chunk type. Expected 0x4E4F534A, found 0x"+l.toString(16)),null;const h=new Uint8Array(e,12+2*4,c),u=JSON.parse(ie.decodeText(h)),f=[];let d=12+2*4+c;for(;d<o.length;){if(c=r.getUint32(d,!0),l=r.getUint32(d+4,!0),l!==i.BIN)return console.error("Invalid glb chunk type. Expected 0x004E4942, found 0x"+l.toString(16)),null;const p=d+2*4,_=e.slice(p,p+c);f.push(_),d+=c+2*4}return{gltf:u,buffers:f}}static getNormalizedComponentScale(e){if(e===Int8Array)return 1/127;if(e===Uint8Array)return 1/255;if(e===Int16Array)return 1/32767;if(e===Uint16Array)return 1/65535;throw new Error("Unsupported normalized accessor component type.")}}class Rc{static parse(e,t){const{url:n}=e;return t.loadFile(n,"arraybuffer").then(s=>{if(ie.decodeText(new Uint8Array(s,0,4))==="glTF"){const r=ie.parseGLB(s);e.gltf=r.gltf,e.buffers=r.buffers}else{const r=ie.decodeText(new Uint8Array(s));e.gltf=JSON.parse(r)}})}}class Cc{static parse(e,t){const{gltf:n,path:s}=e,{nodes:i=[],skins:r=[],meshes:o=[],buffers:c,images:l}=n;if(r.forEach(h=>{const{joints:u=[]}=h;u.forEach(f=>{i[f].isBone=!0})}),i.forEach(h=>{h.mesh!==void 0&&h.skin!==void 0&&(o[h.mesh].isSkinned=!0)}),t.detailLoadProgress){const h=new Set;c&&c.forEach(u=>{if(!u.uri)return;const f=ie.resolveURL(u.uri,s);h.add(f)}),l&&l.forEach((u,f)=>{const{uri:d,bufferView:p}=u;let _=d;p!==void 0&&(_="blob<"+f+">"),_=ie.resolveURL(_,s),h.add(_)}),h.forEach(u=>t.manager.itemStart(u)),e.loadItems=h}}}class Nc{static parse(e){const{gltf:{asset:{version:t}}}=e,n=Number(t);if(!(n>=2&&n<3))throw"Only support gltf 2.x."}}class Lc{static parse(e,t){const{gltf:n,loadItems:s}=e;return e.buffers!==null?null:Promise.all(n.buffers.map(i=>{const r=ie.resolveURL(i.uri,e.path);t.detailLoadProgress&&s.delete(r);const o=t.loadFile(r,"arraybuffer").then(c=>(t.detailLoadProgress&&t.manager.itemEnd(r),c));return t.detailLoadProgress&&o.catch(()=>t.manager.itemEnd(r)),o})).then(i=>{e.buffers=i})}}class Pc{static loadBufferView(e,t,n){const s=t[e.buffer];if(!n||!n.supported)throw new Error("GLTFLoader: setMeshoptDecoder must be called before loading compressed files.");const i=e.byteOffset||0,r=e.byteLength||0,o=e.count,c=e.byteStride,l=new Uint8Array(s,i,r);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(o,c,l,e.mode,e.filter).then(h=>h.buffer):n.ready.then(()=>{const h=new ArrayBuffer(o*c);return n.decodeGltfBuffer(new Uint8Array(h),o,c,l,e.mode,e.filter),h})}}class bc{static parse(e,t){const{buffers:n,gltf:s}=e;if(s.bufferViews)return Promise.all(s.bufferViews.map(i=>{const{buffer:r,byteOffset:o=0,byteLength:c=0}=i;if(i.extensions){const{EXT_meshopt_compression:h}=i.extensions;if(h)return Pc.loadBufferView(h,n,t.getMeshoptDecoder())}return n[r].slice(o,o+c)})).then(i=>{e.bufferViews=i})}}class Dc{static loadTextureData(e,t){return new Promise((n,s)=>{t.load(e,n,void 0,s)})}}class Ic{static parse(e,t){const{gltf:n,bufferViews:s,path:i,loadItems:r}=e;if(n.images)return Promise.all(n.images.map((o,c)=>{const{uri:l,bufferView:h,mimeType:u,name:f}=o;let d=!1,p=l||"";if(h!==void 0){const m=s[h],A=new Blob([m],{type:u});p=URL.createObjectURL(A),d=!0}const _=ie.resolveURL(p,i);t.detailLoadProgress&&r.delete(_);let g;if(u&&u.includes("ktx2"))g=Dc.loadTextureData(_,t.getKTX2Loader()).then(m=>(t.detailLoadProgress&&(d?t.manager.itemEnd(ie.resolveURL("blob<"+c+">",i)):t.manager.itemEnd(_)),m));else{const m={loader:t,imageUrl:_,imageName:f,isObjectURL:d,sourceUrl:p,index:c,path:i};if(u&&(u.includes("avif")||u.includes("webp")))g=Oc(u).then(A=>{if(A)return ns(m);throw new Error("GLTFLoader: WebP or AVIF required by asset but unsupported.")});else return ns(m)}return t.detailLoadProgress&&g.catch(()=>t.manager.itemEnd(_)),g})).then(o=>{e.images=o})}}function Oc(a){return new Promise(t=>{const n=new Image;a.includes("avif")?n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=":n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=()=>{t(n.height===1)}})}function ns(a){const{loader:e,imageUrl:t,imageName:n,isObjectURL:s,sourceUrl:i,index:r,path:o}=a;return e.loadImage(t).then(l=>(l.__name=n,s===!0&&URL.revokeObjectURL(i),e.detailLoadProgress&&(s?e.manager.itemEnd(ie.resolveURL("blob<"+r+">",o)):e.manager.itemEnd(t)),l))}const J={POSITION:"a_Position",NORMAL:"a_Normal",TANGENT:"a_Tangent",TEXCOORD_0:"a_Uv",TEXCOORD_1:"a_Uv2",TEXCOORD_2:"a_Uv3",TEXCOORD_3:"a_Uv4",TEXCOORD_4:"a_Uv5",TEXCOORD_5:"a_Uv6",TEXCOORD_6:"a_Uv7",TEXCOORD_7:"a_Uv8",COLOR_0:"a_Color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex",TEXCOORD0:"a_Uv",TEXCOORD:"a_Uv",COLOR0:"a_Color",COLOR:"a_Color",WEIGHT:"skinWeight",JOINT:"skinIndex"},is={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},Ie={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ss={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rs={9728:R.NEAREST,9729:R.LINEAR,9984:R.NEAREST_MIPMAP_NEAREST,9985:R.LINEAR_MIPMAP_NEAREST,9986:R.NEAREST_MIPMAP_LINEAR,9987:R.LINEAR_MIPMAP_LINEAR},as={33071:q.CLAMP_TO_EDGE,33648:q.MIRRORED_REPEAT,10497:q.REPEAT},Oe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6};class Uc{static parse(e){const{gltf:t,images:n}=e;if(t.textures)return Promise.all(t.textures.map((s,i)=>{const{sampler:r,source:o=0,name:c}=s,l=new Me;if(s.extensions){const{KHR_texture_basisu:u}=s.extensions;if(u){const f=n[u.source],{image:d,mipmaps:p,type:_,format:g,minFilter:m,magFilter:A,generateMipmaps:E,encoding:M,premultiplyAlpha:S}=f;l.image=d,l.mipmaps=p,l.type=_,l.format=g,l.minFilter=m,l.magFilter=A,l.generateMipmaps=E,l.encoding=M,l.premultiplyAlpha=S}else if(Object.values(s.extensions).length&&Object.values(s.extensions)[0].hasOwnProperty("source"))l.image=n[Object.values(s.extensions)[0].source];else return console.error("GLTFLoader: Couldn't load texture"),null}else l.image=n[o];l.version++,l.name=c||l.image.__name||`texture_${i}`,l.flipY=!1;const h=t.samplers||{};return Fc(l,h[r]),l})).then(s=>{e.textures=s})}}function Fc(a,e={}){const{magFilter:t,minFilter:n,wrapS:s,wrapT:i}=e;a.magFilter=rs[t]||R.LINEAR,a.minFilter=rs[n]||R.LINEAR_MIPMAP_LINEAR,a.wrapS=as[s]||q.REPEAT,a.wrapT=as[i]||q.REPEAT}class Bc{static getMaterial(){return new As}}class Is{static transform(e,t){let n=0,s=0,i=1,r=1,o=0;t.offset!==void 0&&(n=t.offset[0],s=t.offset[1]),t.rotation!==void 0&&(o=t.rotation),t.scale!==void 0&&(i=t.scale[0],r=t.scale[1]),e.setUvTransform(n,s,i,r,o,0,0),t.texCoord!==void 0&&console.warn("Custom UV sets in KHR_texture_transform extension not yet supported.")}}class os{static getMaterial(){return new Gr}static parseParams(e,t,n){const{diffuseFactor:s,diffuseTexture:i,specularFactor:r,glossinessFactor:o,specularGlossinessTexture:c}=t;Array.isArray(s)&&(e.diffuse.fromArray(s),e.opacity=s[3]||1),i&&(e.diffuseMap=n[i.index],e.diffuseMapCoord=i.texCoord||0,e.diffuseMap&&(e.diffuseMap.encoding=he.SRGB),Gc(e,"diffuseMap",i.extensions)),e.glossiness=o!==void 0?o:1,Array.isArray(r)&&e.specular.fromArray(r),c&&(e.glossinessMap=n[c.index],e.specularMap=n[c.index])}}function Gc(a,e,t={}){const n=t.KHR_texture_transform;n&&(a[e]=Is.transform(a[e+"Transform"],n))}class cs{static getMaterial(){return new Jn}static parseParams(e,t,n){const{clearcoatFactor:s,clearcoatTexture:i,clearcoatRoughnessFactor:r,clearcoatRoughnessTexture:o,clearcoatNormalTexture:c}=t;if(s&&(e.clearcoat=s),i&&(e.clearcoatMap=n[i.index]),r&&(e.clearcoatRoughness=r),o&&(e.clearcoatRoughnessMap=n[o.index]),c&&(e.clearcoatNormalMap=n[c.index],c.scale)){const l=c.scale;e.clearcoatNormalScale=new z(l,l)}}}class zc{static parse(e){const{gltf:t,textures:n}=e;if(!t.materials)return;const s=[];for(let i=0;i<t.materials.length;i++){const{extensions:r={},pbrMetallicRoughness:o,normalTexture:c,occlusionTexture:l,emissiveTexture:h,emissiveFactor:u,alphaMode:f,alphaCutoff:d,doubleSided:p,name:_=""}=t.materials[i],{KHR_materials_unlit:g,KHR_materials_pbrSpecularGlossiness:m,KHR_materials_clearcoat:A}=r;let E=null;if(g?E=Bc.getMaterial():m?(E=os.getMaterial(),os.parseParams(E,m,n)):A?(E=cs.getMaterial(),cs.parseParams(E,A,n)):E=new Jn,E.name=_,o){const{baseColorFactor:M,baseColorTexture:S,metallicFactor:w,roughnessFactor:N,metallicRoughnessTexture:U}=o;Array.isArray(M)&&(E.diffuse.fromArray(M),E.opacity=M[3]!==void 0?M[3]:1),S&&(E.diffuseMap=n[S.index],E.diffuseMapCoord=S.texCoord||0,E.diffuseMap&&(E.diffuseMap.encoding=he.SRGB,Fn(E,"diffuseMap",S.extensions))),!g&&!m&&(E.metalness=w!==void 0?w:1,E.roughness=N!==void 0?N:1,U&&(E.metalnessMap=n[U.index],E.roughnessMap=n[U.index]))}u&&E.emissive.fromArray(u),h&&(E.emissiveMap=n[h.index],E.emissiveMapCoord=h.texCoord||0,E.emissiveMap&&(E.emissiveMap.encoding=he.SRGB,Fn(E,"emissiveMap",h.extensions))),l&&(E.aoMap=n[l.index],E.aoMapCoord=l.texCoord||0,l.strength!==void 0&&(E.aoMapIntensity=l.strength),E.aoMap&&Fn(E,"aoMap",l.extensions)),g||c&&(E.normalMap=n[c.index],E.normalScale.set(1,-1),c.scale!==void 0&&E.normalScale.set(c.scale,-c.scale),E.normalMap),E.side=p===!0?ue.DOUBLE:ue.FRONT,f===is.BLEND?E.transparent=!0:(E.transparent=!1,f===is.MASK&&(E.alphaTest=d!==void 0?d:.5)),s[i]=E}e.materials=s}}function Fn(a,e,t={}){const n=t.KHR_texture_transform;n&&Is.transform(a[e+"Transform"],n)}class Hc{static parse(e){const{bufferViews:t,gltf:n}=e;if(!n.accessors)return;const s=new Map,i=n.accessors.map(r=>{const{bufferView:o,type:c,componentType:l,count:h,byteOffset:u=0,normalized:f=!1,sparse:d}=r;if(o===void 0&&d===void 0)return null;const p=o!==void 0?t[o]:null,_=o!==void 0?n.bufferViews[o].byteStride:void 0,g=ss[c],m=Yt[l],A=m.BYTES_PER_ELEMENT,E=A*g;let M,S;if(_&&_!==E){const w="Buffer:"+o+":"+l;let N=s.get(w);N||(M=new m(p),N=new ee(M,_/A),s.set(w,N)),S=new W(N,g,u/A,f)}else p===null?M=new m(h*g):M=new m(p,u,h*g),S=new W(new ee(M,g),g,0,f);if(d){const w=ss.SCALAR,N=Yt[d.indices.componentType],U=d.indices.byteOffset||0,D=d.values.byteOffset||0,Y=new N(t[d.indices.bufferView],U,d.count*w),F=new m(t[d.values.bufferView],D,d.count*g);p!==null&&(S=new W(S.buffer.clone(),S.size,S.offset,S.normalized));const C=S.buffer;for(let P=0,j=Y.length;P<j;P++){const H=Y[P];if(C.array[H*S.size]=F[P*g],g>=2&&(C.array[H*S.size+1]=F[P*g+1]),g>=3&&(C.array[H*S.size+2]=F[P*g+2]),g>=4&&(C.array[H*S.size+3]=F[P*g+3]),g>=5)throw new Error("Unsupported itemSize in sparse Attribute.")}}return S});s.clear(),e.accessors=i}}class Vc{static getGeometry(e,t,n,s,i){const{bufferView:r,attributes:o}=e;if(!i)throw new Error("GLTFLoader: No DRACOLoader instance provided.");const c={};for(const f in o){const d=J[f]===void 0?f:J[f];c[d]=o[f]}const l={},h={};for(const f in n){const d=J[f]||f.toLowerCase();if(o[f]!==void 0){const p=s[n[f]],_=Yt[p.componentType];h[d]=_.name,l[d]=p.normalized===!0}}const u=t[r];return new Promise(function(f){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}f(d)},c,h)})}}class kc{static parse(e,t){const{gltf:n,accessors:s,materials:i,bufferViews:r}=e;if(!n.meshes)return;const o=new Map,c=new Map,l=[];for(let h=0;h<n.meshes.length;h++){const u=n.meshes[h],f=[];for(let d=0;d<u.primitives.length;d++){const p=u.primitives[d],{extensions:_={},mode:g,material:m}=p,{KHR_draco_mesh_compression:A}=_;let E;const M=qc(p);c.has(M)?E=c.get(M):(A?E=Vc.getGeometry(A,r,p.attributes,n.accessors,t.getDRACOLoader()):E=Promise.resolve(new pt),E=E.then(w=>(Wc(w,p,n,s),w)),c.set(M,E));const S=E.then(w=>{const N={mode:g,geometry:w,material:m===void 0?new Jn:i[m],weights:Object.keys(w.morphAttributes).length>0&&u.weights?u.weights.slice(0):void 0,skinned:u.isSkinned};return Xc(N,o),N});f.push(S)}l.push(Promise.all(f))}return o.clear(),c.clear(),Promise.all(l).then(h=>{e.primitives=h})}}function Wc(a,e,t,n){const{attributes:s,indices:i,targets:r}=e;for(const l in s){const h=s[l],u=J[l]===void 0?l:J[l];u in a.attributes||a.addAttribute(u,n[h])}i!==void 0&&!a.index&&a.setIndex(n[i]);const{boundingBox:o,boundingSphere:c}=a;if(s.POSITION!==void 0){const l=s.POSITION,h=t.accessors[l];if(h.min&&h.max){if(o.min.fromArray(h.min),o.max.fromArray(h.max),h.normalized){const u=ie.getNormalizedComponentScale(Yt[h.componentType]);o.min.multiplyScalar(u),o.max.multiplyScalar(u)}}else a.computeBoundingBox()}else a.computeBoundingBox();if(o.getCenter(c.center),c.radius=o.min.distanceTo(o.max)/2,r){let l=!1,h=!1;for(let u=0,f=r.length;u<f;u++){const d=r[u];if(d.POSITION!==void 0&&(l=!0),d.NORMAL!==void 0&&(h=!0),l&&h)break}if(l||h){const u=[],f=[];for(let d=0,p=r.length;d<p;d++){const _=r[d];l&&u.push(_.POSITION!==void 0?n[_.POSITION]:a.attributes[J.POSITION]),h&&f.push(_.NORMAL!==void 0?n[_.NORMAL]:a.attributes[J.NORMAL])}l&&(a.morphAttributes.position=u),h&&(a.morphAttributes.normal=f)}}return a}function Xc(a,e){let{geometry:t,material:n,skinned:s,mode:i}=a;const r=t.attributes[J.TANGENT]!==void 0,o=t.attributes[J.COLOR_0]!==void 0,c=t.attributes[J.NORMAL]===void 0,l=s;if(i===Oe.POINTS){const h="PointsMaterial:"+n.id;let u=e.get(h);u||(u=new zr,_t.prototype.copy.call(u,n),u.diffuse.copy(n.diffuse),u.diffuseMap=n.map,u.acceptLight=!1,e.set(h,u)),n=u}else if(i===Oe.LINES||i===Oe.LINE_STRIP||i===Oe.LINE_LOOP){const h="BasicMaterial:"+n.id;let u=e.get(h);u||(u=new As,u.envMap=void 0,u.diffuse.copy(n.diffuse),u.diffuseMap=n.diffuseMap,u.drawMode=i,e.set(h,u)),n=u}else i===Oe.TRIANGLE_STRIP?(console.warn("TRIANGLE_STRIP will be removed later."),n.drawMode=Oe.TRIANGLE_STRIP):i===Oe.TRIANGLE_FAN&&(console.warn("TRIANGLE_FAN will be removed later."),n.drawMode=Oe.TRIANGLE_FAN);if(r||o||c||l){let h="ClonedMaterial:"+n.id+":";r&&(h+="vertex-tangents:"),o&&(t.attributes[J.COLOR_0].size===3?h+="vertex-colors-rgb:":t.attributes[J.COLOR_0].size===4&&(h+="vertex-colors-rgba:")),c&&(h+="flat-shading:");let u=e.get(h);u||(u=n.clone(),r&&(u.vertexTangents=!0,u.normalMap&&(u.normalScale.y*=-1)),o&&(t.attributes[J.COLOR_0].size===3?u.vertexColors=Ve.RGB:t.attributes[J.COLOR_0].size===4?u.vertexColors=Ve.RGBA:console.warn("Illegal vertex color size: "+t.attributes[J.COLOR_0].size)),c&&(u.shading=ct.FLAT_SHADING)),n=u}a.material=n}function qc(a){const e=a.extensions&&a.extensions.KHR_draco_mesh_compression;let t;if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Bn(e.attributes):t=a.indices+":"+Bn(a.attributes)+":"+a.mode,a.targets)for(let n=0,s=a.targets.length;n<s;n++)t+=":"+Bn(a.targets[n]);return t}function Bn(a){let e="";const t=Object.keys(a).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+a[t[n]]+";";return e}class Yc{static getLight(e){const{color:t,intensity:n=1,type:s,range:i,spot:r}=e;let o;if(s==="directional")o=new xs;else if(s==="point")o=new ys,i!==void 0&&(o.distance=i);else if(s==="spot"){if(o=new ws,i!==void 0&&(o.distance=i),r){const{innerConeAngle:c=0,outerConeAngle:l=Math.PI/4}=r;o.angle=l,o.penumbra=1-c/l}}else throw new Error("Unexpected light type: "+s);return t&&o.color.fromArray(t),o.intensity=n,o}}class Qc{static parse(e){const{gltf:{nodes:t,cameras:n,extensions:s}}=e;if(!t)return;const i=[],r=[],o=t.map(c=>{const{matrix:l,translation:h,rotation:u,scale:f,camera:d,mesh:p,extensions:_={}}=c,{KHR_lights_punctual:g}=_;let m=null;if(c.isBone)m=new Rs;else if(p!==void 0)m=jc(e,c);else if(d!==void 0)m=Kc(n[d]),i.push(m);else if(g){const A=g.light,E=s.KHR_lights_punctual.lights;m=Yc.getLight(E[A]),r.push(m)}else m=new ge;if(m.name=c.name||"",m.name&&m.children.length>0)for(let A=0;A<m.children.length;A++)m.children[A].name=m.name+"_"+A;return l!==void 0?(m.matrix.fromArray(l),m.matrix.decompose(m.position,m.quaternion,m.scale)):(h!==void 0&&m.position.fromArray(h),u!==void 0&&m.quaternion.fromArray(u),f!==void 0&&m.scale.fromArray(f)),m});e.nodes=o,e.cameras=i,e.lights=r}}function Kc(a){const{orthographic:e,perspective:t,type:n}=a,s=new jt;if(n=="perspective"){const{aspectRatio:i,yfov:r,zfar:o,znear:c}=t;s.setPerspective(r,i||1,c||1,o||2e6)}else if(n=="orthographic"){const{xmag:i,ymag:r,zfar:o,znear:c}=e;s.setOrtho(-i,i,-r,r,c||1,o||2e6)}return s}function jc(a,e){const{primitives:t}=a,{mesh:n,skin:s}=e,i=t[n].map(r=>{const{geometry:o,material:c,weights:l}=r;let h;return s!==void 0?(h=new Cs(o,c),o.attributes.skinWeight&&!o.attributes.skinWeight.normalized&&Zc(o.attributes.skinWeight)):(h=new wt(o,c),l&&(h.morphTargetInfluences=l.slice())),h});if(i.length>1){const r=new ge;return i.forEach(o=>r.add(o)),r}else return i[0]}const At=new de;function Zc(a){const e=a.offset,t=a.buffer,n=t.stride;for(let s=0,i=t.count;s<i;s++){At.fromArray(t.array,s*n+e);const r=1/At.getManhattanLength();r!==1/0?At.multiplyScalar(r):At.set(1,0,0,0),At.toArray(t.array,s*n+e)}}class $c{static parse(e){const{gltf:t,accessors:n,nodes:s}=e,i=t.skins;if(!i)return;const r=i.map(o=>{const{inverseBindMatrices:c,joints:l}=o,h=n[c],u=[],f=[];return l.forEach((d,p)=>{const _=s[d];if(_){u.push(_);const g=new O;h&&g.fromArray(h.buffer.array,p*16),f.push(g)}else console.warn("Joint "+d+" could not be found.")}),new ni(u,f)});e.skins=r,s.forEach((o,c)=>{const{skin:l}=t.nodes[c];l!==void 0&&o.traverse(function(h){h.isSkinnedMesh&&h.bind(r[l],h.worldMatrix)})})}}class Jc{static parse(e){const{gltf:t,nodes:n}=e,s=t.scenes.map(i=>{const{name:r="",nodes:o=[]}=i,c=new ge;c.name=r;for(let l=0;l<o.length;l++)Os(o[l],c,t.nodes,n);return c});e.roots=s,e.root=s[t.scene||0]}}function Os(a,e,t,n){const s=n[a],i=t[a];if(e.add(s),i.children){const r=i.children;for(let o=0,c=r.length;o<c;o++){const l=r[o];Os(l,s,t,n)}}}class el{static parse(e){const{gltf:t,nodes:n,accessors:s}=e,{animations:i}=t;if(!i)return;const r=i.map((o,c)=>{const{channels:l,samplers:h,name:u=`animation_${c}`}=o,f=[];let d=0;for(let p=0;p<l.length;p++){const _=l[p],g=h[_.sampler];if(g){const m=_.target,A=m.node!==void 0?m.node:m.id,E=s[g.input],M=s[g.output],S=n[A];if(!S)continue;S.updateMatrix(),S.matrixAutoUpdate=!0;let w;switch(Ie[m.path]){case Ie.rotation:w=Qn;break;case Ie.weights:w=ds;break;case Ie.position:case Ie.scale:default:w=fs;break}if(!w)continue;const N=new E.buffer.array.constructor(E.buffer.array),U=new Float32Array(M.buffer.array);if(M.normalized){const F=ie.getNormalizedComponentScale(M.buffer.array.constructor);for(let C=0,P=U.length;C<P;C++)U[C]*=F}const D=[];Ie[m.path]===Ie.weights?S.traverse(function(F){F.isMesh&&F.morphTargetInfluences&&D.push(F)}):D.push(S);for(let F=0,C=D.length;F<C;F++){const P=tl(g.interpolation,w===Qn),j=new w(D[F],Ie[m.path],N,U,P);f.push(j)}const Y=N[N.length-1];d<Y&&(d=Y)}}return new nr(u,f,d)});e.animations=r}}function tl(a,e){switch(a){case"STEP":return lt;case"CUBICSPLINE":return e?Ks:us;case"LINEAR":default:return e?Yn:qn}}let nl=0;class il{constructor(){this.id=++nl,this.url="",this.path="",this.options=null,this.gltf=null,this.loadItems=null,this.buffers=null,this.bufferViews=null,this.images=null,this.textures=null,this.materials=null,this.accessors=null,this.primitives=null,this.nodes=null,this.cameras=null,this.lights=null,this.skins=null,this.root=null,this.roots=null,this.animations=null}}const sl=[Rc,Cc,Nc,Lc,bc,Ic,Uc,zc,Hc,kc,Qc,$c,Jc,el];class wl{constructor(e=_s,t=sl){this.manager=e,this.detailLoadProgress=!0,this.autoLogError=!0,this._parsers=t.slice(0),this._dracoLoader=null,this._meshoptDecoder=null,this._ktx2Loader=null,this._fileLoader=new sr;const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,i=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||s&&i<98?this._imageLoader=new ms:this._imageLoader=new xc}load(e,t={}){return this.manager.itemStart(e),new Promise((n,s)=>{const i=new il;i.url=e,i.path=ie.extractUrlBase(e),i.options=t,this._parse(i).then(n).then(()=>this.manager.itemEnd(e)).catch(r=>{this.autoLogError&&console.error(r),this.detailLoadProgress&&i.loadItems&&i.loadItems.forEach(o=>{this.manager.itemEnd(o)}),this.manager.itemError(e),this.manager.itemEnd(e),s(`Error loading glTF model from ${e} .`)})})}_parse(e){let t;return new Promise((n,s)=>{this._parsers.forEach(i=>{t?t=t.then(()=>i.parse(e,this)):t=i.parse(e,this)}),t?t.then(()=>n(e)).catch(s):n(e)})}setDRACOLoader(e){return this._dracoLoader=e,this}getDRACOLoader(){return this._dracoLoader}setMeshoptDecoder(e){return this._meshoptDecoder=e,this}getMeshoptDecoder(){return this._meshoptDecoder}setKTX2Loader(e){return this._ktx2Loader=e,this}getKTX2Loader(){return this._ktx2Loader}loadFile(e,t="json"){return this._fileLoader.setResponseType(t),new Promise((n,s)=>{e=this.manager.resolveURL(e),this._fileLoader.load(e,n,void 0,s)})}loadImage(e){return new Promise((t,n)=>{e=this.manager.resolveURL(e),this._imageLoader.load(e,t,void 0,n)})}insertParser(e,t){this._parsers.splice(t,0,e)}replaceParser(e,t){this._parsers.splice(t,1,e)}}class Rl{constructor(e,t){this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new v,this.up=new v(0,1,0),this.minDistance=0,this.maxDistance=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!0,this.dampingFactor=.1,this.enableDollying=!0,this.dollyingSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:0,DOLLY:1,PAN:2},this.touches={ORBIT:1,DOLLY_PAN:2},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ci),n._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position)},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),i=s.NONE},this.update=function(){const T=new v,L=new v(0,1,0),k=new We,Z=k.clone(),Ne=new v,mt=new We,Ke=2*Math.PI;return function(){k.setFromUnitVectors(n.up,L),Z.copy(k).conjugate();const Ct=n.object.position;T.copy(Ct).sub(n.target),T.applyQuaternion(k),o.setFromVector3(T),n.autoRotate&&i===s.NONE&&U(w()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ce=n.minAzimuthAngle,xe=n.maxAzimuthAngle;return isFinite(ce)&&isFinite(xe)&&(ce<-Math.PI?ce+=Ke:ce>Math.PI&&(ce-=Ke),xe<-Math.PI?xe+=Ke:xe>Math.PI&&(xe-=Ke),ce<=xe?o.theta=Math.max(ce,Math.min(xe,o.theta)):o.theta=o.theta>(ce+xe)/2?Math.max(ce,o.theta):Math.min(xe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),T.setFromSpherical(o),T.applyQuaternion(Z),Ct.copy(n.target).add(T),n.object.lookAt(n.target,n.up),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,Ne.distanceToSquared(n.object.position)>r||8*(1-mt.dot(n.object.quaternion))>r?(Ne.copy(n.object.position),mt.copy(n.object.quaternion),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",li),n.domElement.removeEventListener("pointerdown",ri),n.domElement.removeEventListener("pointercancel",ai),n.domElement.removeEventListener("wheel",oi),n.domElement.removeEventListener("pointermove",tn),n.domElement.removeEventListener("pointerup",nn),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ci)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4};let i=s.NONE;const r=1e-6,o=new Wt,c=new Wt;let l=1;const h=new v,u=new z,f=new z,d=new z,p=new z,_=new z,g=new z,m=new z,A=new z,E=new z,M=[],S={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function N(){return Math.pow(.95,n.dollyingSpeed)}function U(T){c.theta-=T}function D(T){c.phi-=T}const Y=function(){const T=new v;return function(k,Z){T.setFromMatrixColumn(Z,0),T.multiplyScalar(-k),h.add(T)}}(),F=function(){const T=new v;return function(k,Z){n.screenSpacePanning===!0?T.setFromMatrixColumn(Z,1):(T.setFromMatrixColumn(Z,0),T.crossVectors(n.up,T)),T.multiplyScalar(k),h.add(T)}}(),C=function(){const T=new v,L=new v;return function(Z,Ne){const mt=n.domElement,Ke=n.object.position;T.copy(Ke).sub(n.target);const di=T.getLength(),Ct=L.set(0,0,di).applyMatrix4(n.object.projectionMatrix).z,ce=L.set(0,-1,Ct).applyMatrix4(n.object.projectionMatrixInverse).y;Y(2*Z*ce/mt.clientHeight,n.object.matrix),F(2*Ne*ce/mt.clientHeight,n.object.matrix)}}();function P(T){l/=T}function j(T){l*=T}function H(T){u.set(T.clientX,T.clientY)}function pe(T){m.set(T.clientX,T.clientY)}function oe(T){p.set(T.clientX,T.clientY)}function $(T){f.set(T.clientX,T.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const L=n.domElement;U(2*Math.PI*d.x/L.clientHeight),D(2*Math.PI*d.y/L.clientHeight),u.copy(f)}function G(T){A.set(T.clientX,T.clientY),E.subVectors(A,m),E.y>0?P(N()):E.y<0&&j(N()),m.copy(A)}function I(T){_.set(T.clientX,T.clientY),g.subVectors(_,p).multiplyScalar(n.panSpeed),C(g.x,g.y),p.copy(_)}function B(T){T.deltaY<0?j(N()):T.deltaY>0&&P(N())}function Te(T){let L=!1;switch(T.keyCode){case n.keys.UP:C(0,n.keyPanSpeed),L=!0;break;case n.keys.BOTTOM:C(0,-n.keyPanSpeed),L=!0;break;case n.keys.LEFT:C(n.keyPanSpeed,0),L=!0;break;case n.keys.RIGHT:C(-n.keyPanSpeed,0),L=!0;break}L&&T.preventDefault()}function Q(){if(M.length===1)u.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),L=.5*(M[0].pageY+M[1].pageY);u.set(T,L)}}function Ce(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),L=.5*(M[0].pageY+M[1].pageY);p.set(T,L)}}function Se(){const T=M[0].pageX-M[1].pageX,L=M[0].pageY-M[1].pageY,k=Math.sqrt(T*T+L*L);m.set(0,k)}function Be(){n.enableDollying&&Se(),n.enablePan&&Ce()}function Gs(T){if(M.length==1)f.set(T.pageX,T.pageY);else{const k=sn(T),Z=.5*(T.pageX+k.x),Ne=.5*(T.pageY+k.y);f.set(Z,Ne)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const L=n.domElement;U(2*Math.PI*d.x/L.clientHeight),D(2*Math.PI*d.y/L.clientHeight),u.copy(f)}function zs(T){if(M.length===1)_.set(T.pageX,T.pageY);else{const L=sn(T),k=.5*(T.pageX+L.x),Z=.5*(T.pageY+L.y);_.set(k,Z)}g.subVectors(_,p).multiplyScalar(n.panSpeed),C(g.x,g.y),p.copy(_)}function Hs(T){const L=sn(T),k=T.pageX-L.x,Z=T.pageY-L.y,Ne=Math.sqrt(k*k+Z*Z);A.set(0,Ne),E.set(0,Math.pow(A.y/m.y,n.dollyingSpeed)),P(E.y),m.copy(A)}function Vs(T){n.enableDollying&&Hs(T),n.enablePan&&zs(T)}function ri(T){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",tn),n.domElement.addEventListener("pointerup",nn)),Ys(T),T.pointerType==="touch"?Xs(T):ks(T))}function tn(T){n.enabled!==!1&&(T.pointerType==="touch"?qs(T):Ws(T))}function nn(T){hi(T),M.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",tn),n.domElement.removeEventListener("pointerup",nn)),i=s.NONE}function ai(T){hi(T)}function ks(T){switch(T.button){case n.mouseButtons.ORBIT:if(n.enableRotate===!1)return;H(T),i=s.ROTATE;break;case n.mouseButtons.DOLLY:if(n.enableDollying===!1)return;pe(T),i=s.DOLLY;break;case n.mouseButtons.PAN:if(n.enablePan===!1)return;oe(T),i=s.PAN;break}}function Ws(T){switch(i){case s.ROTATE:if(n.enableRotate===!1)return;$(T);break;case s.DOLLY:if(n.enableDollying===!1)return;G(T);break;case s.PAN:if(n.enablePan===!1)return;I(T);break}}function oi(T){n.enabled===!1||n.enableDollying===!1||i!==s.NONE||(T.preventDefault(),B(T))}function ci(T){n.enabled===!1||n.enablePan===!1||Te(T)}function Xs(T){switch(ui(T),M.length){case n.touches.ORBIT:if(n.enableRotate===!1)return;Q(),i=s.TOUCH_ROTATE;break;case n.touches.DOLLY_PAN:if(n.enableDollying===!1&&n.enablePan===!1)return;Be(),i=s.TOUCH_DOLLY_PAN;break;default:i=s.NONE}}function qs(T){switch(ui(T),i){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Gs(T);break;case s.TOUCH_DOLLY_PAN:if(n.enableDollying===!1&&n.enablePan===!1)return;Vs(T);break;default:i=s.NONE}}function li(T){n.enabled!==!1&&T.preventDefault()}function Ys(T){M.push(T)}function hi(T){delete S[T.pointerId];for(let L=0;L<M.length;L++)if(M[L].pointerId==T.pointerId){M.splice(L,1);return}}function ui(T){let L=S[T.pointerId];L===void 0&&(L=new z,S[T.pointerId]=L),L.set(T.pageX,T.pageY)}function sn(T){const L=T.pointerId===M[0].pointerId?M[1]:M[0];return S[L.pointerId]}n.domElement.addEventListener("contextmenu",li),n.domElement.addEventListener("pointerdown",ri),n.domElement.addEventListener("pointercancel",ai),n.domElement.addEventListener("wheel",oi,{passive:!1}),this.update()}}class Jt{constructor(e,t,n){this.autoUpdate=!0,this.needsUpdate=!0,this.enableCameraJitter=!1}needRender(){return this.autoUpdate?!0:this.needsUpdate?(this.needsUpdate=!1,!0):!1}setGeometryReplaceFunction(e){}setIfRenderReplaceFunction(e){}render(e,t,n,s){}output(e){}resize(e,t){this.needsUpdate=!0}dispose(){this.needsUpdate=!0}}class rl{constructor(){this.name="",this.bufferDependencies=[],this.active=!0,this.needCameraJitter=!1}render(e,t,n,s,i){console.error("Effect: .render() must be implemented in subclass.")}resize(e,t){}dispose(){}}const en=`
    attribute vec3 a_Position;
    attribute vec2 a_Uv;

    uniform mat4 u_ProjectionView;
    uniform mat4 u_Model;

    varying vec2 v_Uv;

    void main() {
        v_Uv = a_Uv;
        gl_Position = u_ProjectionView * u_Model * vec4(a_Position, 1.0);
    }
`,Cl={name:"ec_additive",defines:{},uniforms:{texture1:null,colorWeight1:1,alphaWeight1:1,texture2:null,colorWeight2:1,alphaWeight2:1},vertexShader:en,fragmentShader:`
        uniform sampler2D texture1;
        uniform float colorWeight1;
        uniform float alphaWeight1;

        uniform sampler2D texture2;
        uniform float colorWeight2;
        uniform float alphaWeight2;

        varying vec2 v_Uv;

        void main() {
            vec4 texel1 = texture2D(texture1, v_Uv);
            vec4 texel2 = texture2D(texture2, v_Uv);
            vec3 color = texel1.rgb * colorWeight1 + texel2.rgb * colorWeight2;
            float alpha = texel1.a * alphaWeight1 + texel2.a * alphaWeight2;
            gl_FragColor = vec4(color, alpha);
        }
    `},al={name:"ec_copy",defines:{},uniforms:{tDiffuse:null},vertexShader:en,fragmentShader:`
        uniform sampler2D tDiffuse;

        varying vec2 v_Uv;

        void main() {
            gl_FragColor = texture2D(tDiffuse, v_Uv);
        }
    `},Nl={name:"ec_highlight",defines:{},uniforms:{tDiffuse:null,threshold:1,smoothWidth:.01},vertexShader:en,fragmentShader:`
        uniform float threshold;
		uniform float smoothWidth;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec4 texel = texture2D(tDiffuse, v_Uv);
            vec3 luma = vec3(0.299, 0.587, 0.114);
            float v = dot(texel.xyz, luma);
            gl_FragColor = smoothstep(threshold, threshold + smoothWidth, v) * texel;
        }
    `},vt={None:0,Linear:1,Reinhard:2,Cineon:3,ACESFilmic:4};function Ye(a){return a.format===x.DEPTH_STENCIL||a.format===x.DEPTH24_STENCIL8}const V={OPAQUE:1,TRANSPARENT:2,ALL:15};class Ll extends rl{constructor(){super(),this.toneMapping=vt.Reinhard,this.toneMappingExposure=1,this.outputColorSpace=he.SRGB,this._mainPass=new qt(ol),this._toneMapping=null,this._outputColorSpace=null}render(e,t,n,s,i){e.setRenderTarget(s),e.setClearColor(0,0,0,0),i?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.toneMappingExposure=this.toneMappingExposure,(this._toneMapping!==this.toneMapping||this._outputColorSpace!==this.outputColorSpace)&&(this._toneMapping=this.toneMapping,this._outputColorSpace=this.outputColorSpace,r.material.defines={},this._toneMapping===vt.Linear&&(r.material.defines.LINEAR_TONE_MAPPING=""),this._toneMapping===vt.Reinhard&&(r.material.defines.REINHARD_TONE_MAPPING=""),this._toneMapping===vt.Cineon&&(r.material.defines.CINEON_TONE_MAPPING=""),this._toneMapping===vt.ACESFilmic&&(r.material.defines.ACES_FILMIC_TONE_MAPPING=""),this._outputColorSpace===he.SRGB&&(r.material.defines.SRGB_COLOR_SPACE=""),r.material.needsUpdate=!0),i&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),i&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const ol={name:"ec_tone_mapping",defines:{},uniforms:{tDiffuse:null,toneMappingExposure:1},vertexShader:en,fragmentShader:`
        uniform float toneMappingExposure;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        // exposure only
        vec3 LinearToneMapping(vec3 color) {
            return saturate(toneMappingExposure * color);
        }

        // source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
        vec3 ReinhardToneMapping(vec3 color) {
            color *= toneMappingExposure;
            return saturate(color / (vec3(1.0) + color));
        }

        // source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
        vec3 OptimizedCineonToneMapping(vec3 color) {
            // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
            color *= toneMappingExposure;
            color = max(vec3(0.0), color - 0.004);
            return pow((color * (6.2 * color + 0.5)) / (color * (6.2 * color + 1.7) + 0.06), vec3(2.2));
        }

        // source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
        vec3 RRTAndODTFit(vec3 v) {
            vec3 a = v * (v + 0.0245786) - 0.000090537;
            vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
            return a / b;
        }

        // this implementation of ACES is modified to accommodate a brighter viewing environment.
        // the scale factor of 1/0.6 is subjective. see discussion in https://github.com/mrdoob/three.js/pull/19621.

        vec3 ACESFilmicToneMapping(vec3 color) {
            // sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
            const mat3 ACESInputMat = mat3(
                vec3(0.59719, 0.07600, 0.02840), // transposed from source
                vec3(0.35458, 0.90834, 0.13383),
                vec3(0.04823, 0.01566, 0.83777)
            );
        
            // ODT_SAT => XYZ => D60_2_D65 => sRGB
            const mat3 ACESOutputMat = mat3(
                vec3( 1.60475, -0.10208, -0.00327), // transposed from source
                vec3(-0.53108,  1.10813, -0.07276),
                vec3(-0.07367, -0.00605,  1.07602)
            );
        
            color *= toneMappingExposure / 0.6;
        
            color = ACESInputMat * color;
        
            // Apply RRT and ODT
            color = RRTAndODTFit(color);
        
            color = ACESOutputMat * color;
        
            // Clamp to [0, 1]
            return saturate(color);
        }

        void main() {
            gl_FragColor = texture2D(tDiffuse, v_Uv);

            // tone mapping

			#ifdef LINEAR_TONE_MAPPING
				gl_FragColor.rgb = LinearToneMapping(gl_FragColor.rgb);
			#elif defined(REINHARD_TONE_MAPPING)
				gl_FragColor.rgb = ReinhardToneMapping(gl_FragColor.rgb);
			#elif defined(CINEON_TONE_MAPPING)
				gl_FragColor.rgb = OptimizedCineonToneMapping(gl_FragColor.rgb);
			#elif defined(ACES_FILMIC_TONE_MAPPING)
				gl_FragColor.rgb = ACESFilmicToneMapping(gl_FragColor.rgb);
			#endif

            // color space

            #ifdef SRGB_COLOR_SPACE
				gl_FragColor = LinearTosRGB(gl_FragColor);
			#endif
        }
    `};class cl extends Jt{constructor(e,t,n){super(e,t,n),this.enableCameraJitter=!0,this._rt=new fe(e,t),this._rt.texture.minFilter=R.NEAREST,this._rt.texture.magFilter=R.NEAREST,this._rt.texture.generateMipmaps=!1,n.floatColorBuffer?this._rt.texture.type=b.FLOAT:this._rt.texture.type=b.HALF_FLOAT;const s=new Me;s.image={data:null,width:e,height:t},s.type=b.UNSIGNED_INT_24_8,s.format=x.DEPTH_STENCIL,s.magFilter=R.NEAREST,s.minFilter=R.NEAREST,s.generateMipmaps=!1,s.flipY=!1,this._rt.attach(s,y.DEPTH_STENCIL_ATTACHMENT),this._renderOptions={getMaterial:Gn()},this._fixedRenderStates={scene:null,lights:null,camera:{id:0,version:0,near:0,far:0,position:new v,logDepthCameraNear:0,logDepthBufFC:0,viewMatrix:new O,projectionMatrix:new O,projectionViewMatrix:new O,rect:new de(0,0,1,1)},gammaFactor:2,outputEncoding:null},this.layers=[0],this.cameraNear=-1,this.cameraFar=-1}setIfRenderReplaceFunction(e){e?this._renderOptions.ifRender=e:delete this._renderOptions.ifRender}setGeometryReplaceFunction(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}setMaterialReplaceFunction(e){e?this._renderOptions.getMaterial=Gn(e):this._renderOptions.getMaterial=Gn()}render(e,t,n,s){if(!this.needRender())return;const i=t.$cameraJitter,r=this.enableCameraJitter&&i.accumulating();e.setRenderTarget(this._rt),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1);const o=this._renderOptions,c=n.getRenderStates(s),l=n.getRenderQueue(s),h=this._getFixedRenderStates(c);r&&i.jitterProjectionMatrix(h.camera,this._rt.width,this._rt.height),e.beginRender();const u=this.layers;for(let f=0,d=u.length;f<d;f++){const p=l.getLayer(u[f]);e.renderRenderableList(p.opaque,h,o),e.renderRenderableList(p.transparent,h,o)}e.endRender()}output(){return this._rt}getCurrentRenderStates(){return this._fixedRenderStates}resize(e,t){super.resize(e,t),this._rt.resize(e,t)}dispose(){super.dispose(),this._rt.dispose()}_getFixedRenderStates(e){const t=this._fixedRenderStates;t.scene=e.scene,t.lights=e.lights,t.gammaFactor=e.gammaFactor,t.outputEncoding=e.outputEncoding;const n=t.camera,s=e.camera;n.id=s.id,n.version=s.version,n.position=s.position,n.logDepthCameraNear=s.logDepthCameraNear,n.logDepthBufFC=s.logDepthBufFC,n.viewMatrix=s.viewMatrix,n.rect=s.rect;const i=this.cameraNear>0?this.cameraNear:s.near,r=this.cameraFar>0?this.cameraFar:s.far;return n.near=i,n.far=r,n.projectionMatrix.copy(s.projectionMatrix),this.cameraNear>0||this.cameraFar>0?(n.projectionMatrix.elements[10]=-(r+i)/(r-i),n.projectionMatrix.elements[14]=-2*r*i/(r-i),n.projectionViewMatrix.multiplyMatrices(n.projectionMatrix,n.viewMatrix)):n.projectionViewMatrix.copy(s.projectionViewMatrix),t}}function Gn(a=ll){return function(e){const t=a(e);return t.diffuseMap=e.material.diffuseMap,t.uniforms.roughness=e.material.roughness!==void 0?e.material.roughness:.5,t.roughnessMap=e.material.roughnessMap,t.side=e.material.side,t}}const zn=new Map,Hn=new WeakMap;function ll(a){let e=Hn.get(a.material);if(!e){let u=function(){a.material.removeEventListener("dispose",u),Hn.delete(a.material),e.refCount--,e.refCount<=0&&zn.delete(h)};const t=!a.geometry.attributes.a_Normal||a.material.shading===ct.FLAT_SHADING,n=!!a.material.diffuseMap,s=!!a.material.roughnessMap,i=a.object.isSkinnedMesh&&a.object.skeleton,r=!!a.object.morphTargetInfluences,o=!!a.object.morphTargetInfluences&&a.object.geometry.morphAttributes.normal,c=a.material.side;let l=0;i&&(a.object.skeleton.boneTexture?l=1024:l=a.object.skeleton.bones.length);const h=t+"_"+n+"_"+s+"_"+i+"_"+l+"_"+r+"_"+o+"_"+c;if(e=zn.get(h),!e){const f=new Rt(hl);f.shading=t?ct.FLAT_SHADING:ct.SMOOTH_SHADING,f.alphaTest=n?.999:0,f.side=c,e={refCount:0,material:f},zn.set(h,e)}Hn.set(a.material,e),e.refCount++,a.material.addEventListener("dispose",u)}return e.material}const hl={name:"ec_gbuffer_ng",defines:{G_USE_ROUGHNESSMAP:!1},uniforms:{roughness:.5,roughnessMap:null},vertexShader:`
        #include <common_vert>
        #include <morphtarget_pars_vert>
        #include <skinning_pars_vert>
        #include <normal_pars_vert>
        #include <uv_pars_vert>
		#include <modelPos_pars_frag>
        void main() {
        	#include <uv_vert>
        	#include <begin_vert>
        	#include <morphtarget_vert>
        	#include <morphnormal_vert>
        	#include <skinning_vert>
        	#include <skinnormal_vert>
        	#include <normal_vert>
        	#include <pvm_vert>
			#include <modelPos_vert>
        }
    `,fragmentShader:`
        #include <common_frag>
        #include <diffuseMap_pars_frag>

        #include <uv_pars_frag>

        #include <packing>
        #include <normal_pars_frag>

        uniform float roughness;

        #ifdef USE_ROUGHNESSMAP
            uniform sampler2D roughnessMap;
        #endif

		#include <modelPos_pars_frag>

        void main() {
            #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
                vec4 texelColor = texture2D(diffuseMap, v_Uv);
                float alpha = texelColor.a * u_Opacity;
                if(alpha < ALPHATEST) discard;
            #endif

			#ifdef FLAT_SHADED
				vec3 fdx = dFdx(v_modelPos);
				vec3 fdy = dFdy(v_modelPos);
				vec3 normal = normalize(cross(fdx, fdy));
			#else
            	vec3 normal = normalize(v_Normal);
				#ifdef DOUBLE_SIDED
					normal = normal * (float(gl_FrontFacing) * 2.0 - 1.0);
				#endif 
			#endif

            float roughnessFactor = roughness;
            #ifdef USE_ROUGHNESSMAP
                roughnessFactor *= texture2D(roughnessMap, v_Uv).g;
            #endif

            vec4 packedNormalGlossiness;
            packedNormalGlossiness.xyz = normal * 0.5 + 0.5;
            packedNormalGlossiness.w = clamp(1. - roughnessFactor, 0., 1.);
            
            gl_FragColor = packedNormalGlossiness;
        }
    `};class Us{constructor(e){this.keys=new Array,this.masks=new Array,this.attachChannelSize=e}allocate(e,t=V.ALL){return this.keys.push(e),this.masks.push(t),this.keys.length-1}getAttachIndex(e){const t=this.keys.indexOf(e);return Math.max(0,Math.floor(t/this.attachChannelSize))}getChannelIndex(e){const t=this.keys.indexOf(e);return Math.max(0,t%this.attachChannelSize)}has(e){return this.keys.indexOf(e)>-1}count(){return this.keys.length}attachCount(){return Math.ceil(this.keys.length/this.attachChannelSize)}getKey(e,t){return this.keys[e*this.attachChannelSize+t]}getMask(e,t){return this.masks[e*this.attachChannelSize+t]}getAttachInfo(e,t={count:0,keys:[],masks:[]}){t.count=0;for(let n=0;n<this.attachChannelSize;n++){const s=this.getKey(e,n),i=this.getMask(e,n);s!==void 0&&i!==void 0&&(t.keys[t.count]=s,t.masks[t.count]=i,t.count++)}return t}reset(){this.keys.length=0,this.masks.length=0}}class Fs extends Jt{constructor(e,t,n){super(e,t,n);const s=n.bufferMipmaps;this._rts=[];for(let r=0;r<n.maxMarkAttachment;r++){const o=new fe(e,t);o.detach(y.DEPTH_STENCIL_ATTACHMENT),s||(o.texture.generateMipmaps=!1,o.texture.minFilter=R.LINEAR),this._rts.push(o)}this._mrts=[];for(let r=0;r<n.maxMarkAttachment;r++){const o=new fe(e,t);o.attach(new le(e,t,x.RGBA8,n.samplerNumber),y.COLOR_ATTACHMENT0),o.detach(y.DEPTH_STENCIL_ATTACHMENT),this._mrts.push(o)}this._state={attachIndex:0,attachInfo:{count:0,keys:[],masks:[]}};const i=new Us(4);this._opacityRenderOptions={getMaterial:ot(void 0,this._state,i,V.OPAQUE),ifRender:at(void 0,this._state,V.OPAQUE)},this._transparentRenderOptions={getMaterial:ot(void 0,this._state,i,V.TRANSPARENT),ifRender:at(void 0,this._state,V.TRANSPARENT)},this.attachManager=i,this.layers=[0]}setIfRenderReplaceFunction(e){e?(this._opacityRenderOptions.ifRender=at(e,this._state,V.OPAQUE),this._transparentRenderOptions.ifRender=at(e,this._state,V.TRANSPARENT)):(this._opacityRenderOptions.ifRender=at(void 0,this._state,V.OPAQUE),this._transparentRenderOptions.ifRender=at(void 0,this._state,V.TRANSPARENT))}setGeometryReplaceFunction(e){e?(this._opacityRenderOptions.getGeometry=e,this._transparentRenderOptions.getGeometry=e):(delete this._opacityRenderOptions.getGeometry,delete this._transparentRenderOptions.getGeometry)}setMaterialReplaceFunction(e){e?(this._opacityRenderOptions.getMaterial=ot(e,this._state,this.attachManager,V.OPAQUE),this._transparentRenderOptions.getMaterial=ot(e,this._state,this.attachManager,V.TRANSPARENT)):(this._opacityRenderOptions.getMaterial=ot(void 0,this._state,this.attachManager,V.OPAQUE),this._transparentRenderOptions.getMaterial=ot(void 0,this._state,this.attachManager,V.TRANSPARENT))}render(e,t,n,s){if(!this.needRender())return;const i=this.attachManager.attachCount();i>this._rts.length&&console.error("XXMarkBuffer: attachCount<"+i+"> bigger then options.maxMarkAttachment<"+this._rts.length+">.");for(let r=0;r<i;r++){const o=this._rts[r],c=this._mrts[r];t.$useMSAA?(e.setRenderTarget(c),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1)):(e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1));const l=n.getRenderStates(s),h=n.getRenderQueue(s);this._state.attachIndex=r,this.attachManager.getAttachInfo(r,this._state.attachInfo);let u=0,f=this._state.attachInfo.masks,d=this._state.attachInfo.count;for(let _=0;_<d;_++)u|=f[_];e.beginRender();const p=this.layers;for(let _=0,g=p.length;_<g;_++){const m=h.getLayer(p[_]);u&V.OPAQUE&&e.renderRenderableList(m.opaque,l,this._opacityRenderOptions),u&V.TRANSPARENT&&e.renderRenderableList(m.transparent,l,this._transparentRenderOptions)}e.endRender(),t.$useMSAA&&(e.setRenderTarget(o),e.blitRenderTarget(c,o,!0,!1,!1)),e.updateRenderTargetMipmap(o)}}output(e=0){return this._rts[e]}resize(e,t){super.resize(e,t),this._rts.forEach(n=>n.resize(e,t)),this._mrts.forEach(n=>n.resize(e,t))}dispose(){super.dispose(),this._rts.forEach(e=>e.dispose()),this._mrts.forEach(e=>e.dispose())}}function at(a=ul,e,t){return function(n){if(!a(n)||!n.object.effects)return!1;let s=0;for(let i=0;i<e.attachInfo.count;i++){const r=e.attachInfo.keys[i];n.object.effects[r]&&(s|=e.attachInfo.masks[i])}return s&t}}function ul(a){return!0}function ot(a=dl,e,t,n){return function(s){const i=a(s);i.side=ue.DOUBLE;for(let r=0;r<4;r++){const o=t.getKey(e.attachIndex,r);t.getMask(e.attachIndex,r)&n?i.uniforms.mColor[r]=s.object.effects[o]||0:i.uniforms.mColor[r]=0}return i}}const Vn=new Map;function dl(a){const e=a.object.isSkinnedMesh&&a.object.skeleton,t=!!a.object.morphTargetInfluences,n=a.material.drawMode,s=e+"_"+t+"_"+n;let i;return Vn.has(s)?i=Vn.get(s):(i=new Rt(fl),i.premultipliedAlpha=!0,i.transparent=!0,i.blending=ve.ADD,i.drawMode=n,Vn.set(s,i)),i}const fl={name:"ec_mark",defines:{},uniforms:{mColor:[1,1,1,1]},vertexShader:`
        #include <common_vert>
        #include <morphtarget_pars_vert>
        #include <skinning_pars_vert>
        #include <uv_pars_vert>
		#include <logdepthbuf_pars_vert>
        void main() {
        	#include <uv_vert>
        	#include <begin_vert>
        	#include <morphtarget_vert>
        	#include <skinning_vert>
        	#include <pvm_vert>
			#include <logdepthbuf_vert>
        }
    `,fragmentShader:`
        #include <common_frag>
        #include <diffuseMap_pars_frag>

        #include <uv_pars_frag>

		#include <logdepthbuf_pars_frag>

		uniform vec4 mColor;

        void main() {
			#include <logdepthbuf_frag>
			
            #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
                vec4 texelColor = texture2D(diffuseMap, v_Uv);
                float alpha = texelColor.a * u_Opacity;
                if(alpha < ALPHATEST) discard;
            #endif

            gl_FragColor = mColor;
        }
    `};class pl extends Fs{constructor(e,t,n){super(e,t,n)}syncDepthAttachments(e,t){this._rts.forEach(n=>n.dispose()),this._mrts.forEach(n=>n.dispose()),Ye(e)?this._rts.forEach(n=>{n.attach(e,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._rts.forEach(n=>{n.attach(e,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),Ye(t)?this._mrts.forEach(n=>{n.attach(t,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._mrts.forEach(n=>{n.attach(t,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),this.needsUpdate=!0}}class _l extends Jt{constructor(e,t,n){super(e,t,n);const s=n.bufferMipmaps;this._rts=[];for(let o=0;o<n.maxColorAttachment;o++){const c=new fe(e,t);c.detach(y.DEPTH_STENCIL_ATTACHMENT),c.texture.type=n.highDynamicRange?b.HALF_FLOAT:b.UNSIGNED_BYTE,s||(c.texture.generateMipmaps=!1,c.texture.minFilter=R.LINEAR),this._rts.push(c)}this._mrts=[];for(let o=0;o<n.maxColorAttachment;o++){const c=new fe(e,t);c.attach(new le(e,t,n.highDynamicRange?x.RGBA16F:x.RGBA8,n.samplerNumber),y.COLOR_ATTACHMENT0),c.detach(y.DEPTH_STENCIL_ATTACHMENT),this._mrts.push(c)}const i={key:null};this._state=i;const r=new Us(1);this._renderOptions={getMaterial:Wn(void 0,i),ifRender:kn(void 0,i)},this.attachManager=r,this.layers=[0]}setIfRenderReplaceFunction(e){e?this._renderOptions.ifRender=kn(e,this._state):this._renderOptions.ifRender=kn(void 0,this._state)}setGeometryReplaceFunction(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}setMaterialReplaceFunction(e){e?this._renderOptions.getMaterial=Wn(e,this._state):this._renderOptions.getMaterial=Wn(void 0,this._state)}syncDepthAttachments(e,t){this._rts.forEach(n=>n.dispose()),this._mrts.forEach(n=>n.dispose()),Ye(e)?this._rts.forEach(n=>{n.attach(e,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._rts.forEach(n=>{n.attach(e,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),Ye(t)?this._mrts.forEach(n=>{n.attach(t,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._mrts.forEach(n=>{n.attach(t,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),this.needsUpdate=!0}render(e,t,n,s){if(!this.needRender())return;const i=this.attachManager.attachCount();i>this._rts.length&&console.error("ColorMarkBuffer: attachCount<"+i+"> bigger then options.maxColorAttachment<"+this._rts.length+">.");for(let r=0;r<i;r++){const o=this._rts[r],c=this._mrts[r];t.$useMSAA?(e.setRenderTarget(c),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1)):(e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1));const l=this._renderOptions,h=this.attachManager,u=n.getRenderStates(s),f=n.getRenderQueue(s);this._state.key=h.getKey(r,0);const d=h.getMask(r,0);e.beginRender();const p=this.layers;for(let _=0,g=p.length;_<g;_++){const m=f.getLayer(p[_]);d&V.OPAQUE&&e.renderRenderableList(m.opaque,u,l),d&V.TRANSPARENT&&e.renderRenderableList(m.transparent,u,l)}e.endRender(),t.$useMSAA&&(e.setRenderTarget(o),e.blitRenderTarget(c,o,!0,!1,!1)),e.updateRenderTargetMipmap(o)}}output(e=0){return this._rts[e]}resize(e,t){super.resize(e,t),this._rts.forEach(n=>n.resize(e,t)),this._mrts.forEach(n=>n.resize(e,t))}dispose(){super.dispose(),this._rts.forEach(e=>e.dispose()),this._mrts.forEach(e=>e.dispose())}}function kn(a=ml,e){return function(t){return!a(t)||!t.object.effects?!1:!!t.object.effects[e.key]}}function ml(a){return!0}function Wn(a=gl,e){return function(t){const n=a(t);return n.side=ue.DOUBLE,n.uniforms.strength=t.object.effects[e.key]||0,n}}const Xn=new Map;function gl(a){const e=a.object.isSkinnedMesh&&a.object.skeleton,t=!!a.object.morphTargetInfluences,n=a.material.drawMode,s=!!a.material.diffuseMap,i=e+"_"+t+"_"+n+s;let r;return Xn.has(i)?r=Xn.get(i):(r=new Rt(El),r.premultipliedAlpha=!1,r.drawMode=n,Xn.set(i,r)),r.transparent=a.material.transparent,r.blending=a.material.blending,r.opacity=a.material.opacity,r.diffuse.copy(a.material.diffuse),r.diffuseMap=a.material.diffuseMap,r}const El={name:"ec_color",defines:{},uniforms:{strength:1},vertexShader:`
        #include <common_vert>
        #include <morphtarget_pars_vert>
        #include <skinning_pars_vert>
        #include <uv_pars_vert>
		#include <logdepthbuf_pars_vert>
        void main() {
        	#include <uv_vert>
        	#include <begin_vert>
        	#include <morphtarget_vert>
        	#include <skinning_vert>
        	#include <pvm_vert>
			#include <logdepthbuf_vert>
        }
    `,fragmentShader:`
        #include <common_frag>
        #include <diffuseMap_pars_frag>

        #include <uv_pars_frag>

		#include <logdepthbuf_pars_frag>

		uniform float strength;

        void main() {
			#include <logdepthbuf_frag>

			vec4 outColor = vec4(u_Color, u_Opacity);

			#ifdef USE_DIFFUSE_MAP
				outColor *= texture2D(diffuseMap, v_Uv);
			#endif

			#ifdef ALPHATEST
				if(outColor.a < ALPHATEST) discard;
			#endif

			outColor.a *= strength;

            gl_FragColor = outColor;
        }
    `};class Ml extends Jt{constructor(e,t,n){super(e,t,n),this.enableCameraJitter=!0,this._rt=new fe(e,t),this._rt.detach(y.DEPTH_STENCIL_ATTACHMENT),this._mrt=new fe(e,t),this._mrt.detach(y.DEPTH_STENCIL_ATTACHMENT),this.clearColor=!0,this.clearDepth=!0,this.clearStencil=!0,this.renderLayers=[{id:0,mask:V.ALL}],this._sceneRenderOptions={}}syncAttachments(e,t,n,s){this._rt.dispose(),this._mrt.dispose(),this._rt.attach(e,y.COLOR_ATTACHMENT0),Ye(t)?(this._rt.attach(t,y.DEPTH_STENCIL_ATTACHMENT),this._rt.detach(y.DEPTH_ATTACHMENT)):(this._rt.attach(t,y.DEPTH_ATTACHMENT),this._rt.detach(y.DEPTH_STENCIL_ATTACHMENT)),this._mrt.attach(n,y.COLOR_ATTACHMENT0),Ye(s)?(this._mrt.attach(s,y.DEPTH_STENCIL_ATTACHMENT),this._mrt.detach(y.DEPTH_ATTACHMENT)):(this._mrt.attach(s,y.DEPTH_ATTACHMENT),this._mrt.detach(y.DEPTH_STENCIL_ATTACHMENT)),this.needsUpdate=!0}setIfRenderReplaceFunction(e){e?this._sceneRenderOptions.ifRender=e:delete this._sceneRenderOptions.ifRender}setGeometryReplaceFunction(e){e?this._sceneRenderOptions.getGeometry=e:delete this._sceneRenderOptions.getGeometry}setOutputEncoding(e){this._rt.texture.encoding=e}getOutputEncoding(){return this._rt.texture.encoding}render(e,t,n,s){if(!this.needRender())return;const i=t.$useMSAA,r=i?this._mrt:this._rt,o=!!r._attachments[y.DEPTH_STENCIL_ATTACHMENT],c=t.$cameraJitter,l=this.enableCameraJitter&&c.accumulating();e.setRenderTarget(r),t.clearColor?e.setClearColor(...t._tempClearColor):e.setClearColor(0,0,0,0),e.clear(this.clearColor,this.clearDepth,this.clearStencil&&o);const h=n.getRenderStates(s),u=n.getRenderQueue(s);l&&c.jitterProjectionMatrix(h.camera,this._rt.width,this._rt.height),this.$renderScene(e,u,h),l&&c.restoreProjectionMatrix(h.camera),i&&(e.setRenderTarget(this._rt),e.blitRenderTarget(this._mrt,this._rt,!0,!0,o)),e.updateRenderTargetMipmap(this._rt)}output(){return this._rt}resize(e,t){super.resize(e,t),this._rt.resize(e,t),this._mrt.resize(e,t)}dispose(){super.dispose(),this._rt.dispose(),this._mrt.dispose()}$renderScene(e,t,n){const s=this._sceneRenderOptions;e.beginRender();const i=this.renderLayers;for(let o=0,c=i.length;o<c;o++){const{id:l,mask:h,options:u=s}=i[o],f=t.getLayer(l);f&&(f.opaqueCount>0&&h&V.OPAQUE&&e.renderRenderableList(f.opaque,n,u),f.transparentCount>0&&h&V.TRANSPARENT&&e.renderRenderableList(f.transparent,n,u))}e.endRender();const r=t.getLayer(1);r&&r.opaqueCount+r.transparentCount>0&&(e.clear(!1,!0,!1),e.beginRender(),e.renderRenderableList(r.opaque,n,s),e.renderRenderableList(r.transparent,n,s),e.endRender())}}class Tl{constructor(e,t,n=!1){this._width=e,this._height=t,this._highDynamicRange=n,this._map=new Map}allocate(e=0){let t=this._map.get(e);if(t||(t=[],this._map.set(e,t)),t.length>0)return t.shift();{const n=Math.pow(2,e),s=Math.ceil(this._width/n),i=Math.ceil(this._height/n),r=new fe(s,i),o=r._attachments[y.COLOR_ATTACHMENT0];return o.minFilter=R.LINEAR,o.magFilter=R.LINEAR,o.type=this._highDynamicRange?b.HALF_FLOAT:b.UNSIGNED_BYTE,o.format=x.RGBA,o.generateMipmaps=!1,r.detach(y.DEPTH_STENCIL_ATTACHMENT),r}}release(e,t=0){this._map.get(t).push(e)}resize(e,t){this._width=e,this._height=t,this._map.forEach((n,s)=>{const i=Math.pow(2,s),r=Math.ceil(this._width/i),o=Math.ceil(this._height/i);n.forEach(c=>{c.resize(r,o)})})}updateStats(e){let t=0;this._map.forEach((n,s)=>{const i=Math.pow(2,s);t+=n.length/(i*i)}),e.fboCache=t}dispose(){this._map.forEach(e=>{e.forEach(t=>{t.dispose()})}),this._map.clear()}}class Sl{constructor(e=30){this._enabled=!1,this._state=X.DISABLED,this._totalFrame=0,this._haltonSequenece=[],this._frame=0,this._jitterMatrix=new O,this._originMatrix=new O,this.setTotalFrame(e)}setTotalFrame(e){this._totalFrame=e;const t=[];for(let n=0;n<e;n++)t.push([ls(n,2),ls(n,3)]);this._haltonSequence=t}set enable(e){this._state===X.DISABLED?e&&(this._frame=0,this._state=X.ACCUMULATING):this._state===X.ACCUMULATING?e||(this._frame=0,this._state=X.DISABLED):this._state===X.FINISHED&&(e||(this._frame=0,this._state=X.DISABLED))}get enable(){return this._state!==X.DISABLED}reset(){this._state!==X.DISABLED&&(this._state===X.ACCUMULATING?this._frame=0:this._state===X.FINISHED&&(this._state=X.ACCUMULATING))}update(){this._state===X.ACCUMULATING&&(this._frame++,this._frame>=this._totalFrame&&(this._state=X.FINISHED,this._frame=0))}finished(){return this._state===X.FINISHED}accumulating(){return this._state===X.ACCUMULATING}frame(){return this._frame}totalFrame(){return this._totalFrame}jitterProjectionMatrix(e,t,n){if(this._state!==X.ACCUMULATING)return;const s=this._haltonSequence[this._frame],i=this._jitterMatrix;i.elements[12]=(s[0]*2-1)/t,i.elements[13]=(s[1]*2-1)/n,this._originMatrix.copy(e.projectionMatrix),e.projectionMatrix.premultiply(i),e.projectionViewMatrix.multiplyMatrices(e.projectionMatrix,e.viewMatrix)}restoreProjectionMatrix(e){this._state===X.ACCUMULATING&&(e.projectionMatrix.copy(this._originMatrix),e.projectionViewMatrix.multiplyMatrices(e.projectionMatrix,e.viewMatrix))}}const X={DISABLED:1,ACCUMULATING:2,FINISHED:3};function ls(a,e){let t=0,n=1/e,s=a;for(;s>0;)t=t+n*(s%e),s=Math.floor(s/e),n=n/e;return t}class Bs{constructor(e,t,n={}){this._size=new z(e,t),n.webgl2=n.webgl2||!1,n.bufferMipmaps=n.bufferMipmaps||!1,n.floatColorBuffer=n.floatColorBuffer||!1,n.highDynamicRange=n.highDynamicRange||!1,n.samplerNumber=n.samplerNumber||8,n.maxMarkAttachment=n.maxMarkAttachment||5,n.maxColorAttachment=n.maxColorAttachment||5;const s=new Ml(e,t,n),i=new cl(e,t,n),r=new Fs(e,t,n),o=new pl(e,t,n),c=new _l(e,t,n);this._bufferMap=new Map([["SceneBuffer",s],["GBuffer",i],["NonDepthMarkBuffer",r],["MarkBuffer",o],["ColorMarkBuffer",c]]),this._defaultColorTexture=new Me,this._defaultColorTexture.type=n.highDynamicRange?b.HALF_FLOAT:b.UNSIGNED_BYTE,this._defaultMSColorRenderBuffer=new le(e,t,n.highDynamicRange?x.RGBA16F:x.RGBA8,n.samplerNumber),n.bufferMipmaps||(this._defaultColorTexture.generateMipmaps=!1,this._defaultColorTexture.minFilter=R.LINEAR),this._defaultDepthRenderBuffer=new le(e,t,x.DEPTH_COMPONENT16),this._defaultMSDepthRenderBuffer=new le(e,t,x.DEPTH_COMPONENT16,n.samplerNumber),this._defaultDepthStencilRenderBuffer=new le(e,t,x.DEPTH_STENCIL),this._defaultMSDepthStencilRenderBuffer=new le(e,t,x.DEPTH24_STENCIL8,n.samplerNumber),this._externalColorAttachment=null,this._externalDepthAttachment=null,this._samplerNumber=n.samplerNumber,this._externalMSAA=null,this._stencilBuffer=!1,this._syncAttachments(),this._copyPass=new qt(al),this._copyPass.material.premultipliedAlpha=!0,this._renderTargetCache=new Tl(e,t,n.highDynamicRange),this._cameraJitter=new Sl,this._effectList=[],this._tempClearColor=[0,0,0,1],this._tempViewport=[0,0,1,1],this._tempBufferNames=new Set,this._stats={fboCache:0,markBuffers:0,colorMarkBuffers:0,currentBufferUsage:{}},this.sceneMSAA=!1,this.clearColor=!0,this.clearDepth=!0,this.clearStencil=!1,this.debugger=null}getSize(){return this._size}_syncAttachments(){const e=this._externalColorAttachment,t=this._externalDepthAttachment,n=!!e&&!!t,s=this._externalMSAA;let i=this._stencilBuffer;n&&(i=Ye(t));const r=i?this._defaultDepthStencilRenderBuffer:this._defaultDepthRenderBuffer,o=i?this._defaultMSDepthStencilRenderBuffer:this._defaultMSDepthRenderBuffer;let c,l,h,u,f,d;n?s?(c=this._defaultColorTexture,l=r,h=e,u=t,f=r,d=t):(c=e,l=t,h=this._defaultMSColorRenderBuffer,u=o,f=t,d=o):(c=this._defaultColorTexture,l=r,h=this._defaultMSColorRenderBuffer,u=o,f=r,d=o),this._bufferMap.forEach(p=>{p.syncAttachments?p.syncAttachments(c,l,h,u):p.syncDepthAttachments&&p.syncDepthAttachments(f,d)})}set stencilBuffer(e){this._stencilBuffer=e,this._syncAttachments()}get stencilBuffer(){return this._stencilBuffer}setExternalAttachment(e,t){const n=hs(e),s=hs(t);if(n!==s){console.warn("EffectComposer.setExternalAttachment: color and depth attachment MultipleSampling not match.");return}this._externalColorAttachment=e,this._externalDepthAttachment=t,this._externalMSAA=n>0,this._syncAttachments()}clearExternalAttachment(){this._externalColorAttachment=null,this._externalDepthAttachment=null,this._externalMSAA=null,this._syncAttachments()}addBuffer(e,t){this._bufferMap.set(e,t)}removeBuffer(e){this._bufferMap.delete(e)}getBuffer(e){return this._bufferMap.get(e)}addEffect(e,t,n=0){if(this.getEffect(e)){console.warn("");return}t.name=e,this._effectList.push({name:e,effect:t,order:n}),t.resize(this._size.x,this._size.y)}removeEffect(e){const t=this._effectList.findIndex(n=>n.name===e);t>-1&&this._effectList.splice(t,1)}getEffect(e){const t=this._effectList.find(n=>n.name===e);return t?t.effect:null}render(e,t,n,s){const i=t.getRenderStates(n);if(e.getClearColor().toArray(this._tempClearColor),n.rect.toArray(this._tempViewport),n.rect.set(0,0,1,1),i.camera.rect.set(0,0,1,1),this._bufferMap.forEach(c=>{c.attachManager&&c.attachManager.reset()}),this.debugger){this.debugger.bufferDependencies.forEach(c=>{const l=this._bufferMap.get(c);this.debugger.channel&&l.attachManager&&l.attachManager.allocate(this.debugger.channel,this.debugger.mask),l.render(e,this,t,n)}),this.debugger.render(e,this,s),e.setClearColor(...this._tempClearColor);return}this._effectList.sort(vl);let r=this._effectList.findIndex(c=>c.effect.active);const o=r>-1;if(this._tempBufferNames.clear(),o){this._tempBufferNames.add("SceneBuffer");let c=!1;this._effectList.forEach(p=>{p.effect.active&&(p.effect.bufferDependencies.forEach(({key:_,mask:g})=>{this._tempBufferNames.add(_),this._bufferMap.get(_).attachManager&&this._bufferMap.get(_).attachManager.allocate(p.name,g)}),c=c||p.effect.needCameraJitter)}),this._cameraJitter.enable=c,this._tempBufferNames.forEach(p=>{this._bufferMap.get(p).render(e,this,t,n)});let l=this._renderTargetCache.allocate(),h=this._renderTargetCache.allocate(),u;this._effectList.sort(Al);const f=this._effectList.length,d=this._effectList.findIndex(p=>p.effect.active);r=f-1-r,this._effectList.forEach((p,_)=>{if(!p.effect.active)return;const g=_<r;p.effect.render(e,this,_===d?this._bufferMap.get("SceneBuffer").output():l,g?h:s,!g),u=l,l=h,h=u}),this._renderTargetCache.release(l),this._renderTargetCache.release(h),this._cameraJitter.update()}else if(this._externalColorAttachment&&this._externalDepthAttachment){const c=this._bufferMap.get("SceneBuffer");c.render(e,this,t,n),e.setRenderTarget(s),e.setClearColor(0,0,0,0),e.clear(this.clearColor,this.clearDepth,this.clearStencil);const l=this._copyPass;l.uniforms.tDiffuse=c.output().texture,l.material.transparent=this._tempClearColor[3]<1||!this.clearColor,l.renderStates.camera.rect.fromArray(this._tempViewport),l.render(e)}else{e.setRenderTarget(s),e.setClearColor(...this._tempClearColor),e.clear(this.clearColor,this.clearDepth,this.clearStencil),i.camera.rect.fromArray(this._tempViewport);const c=t.getRenderQueue(n);this._bufferMap.get("SceneBuffer").$renderScene(e,c,i)}e.setClearColor(...this._tempClearColor),n.rect.fromArray(this._tempViewport),i.camera.rect.fromArray(this._tempViewport)}getStats(){this._renderTargetCache.updateStats(this._stats);const e=this.getBuffer("MarkBuffer").attachManager.attachCount(),t=this.getBuffer("NonDepthMarkBuffer").attachManager.attachCount(),n=this.getBuffer("ColorMarkBuffer").attachManager.attachCount();this._stats.markBuffers=e+t,this._stats.colorMarkBuffers=n;for(const[s,i]of this._bufferMap)i.attachManager||(this._stats.currentBufferUsage[s]=this._tempBufferNames.has(s)?1:0);return this._stats}resize(e,t){this._size.set(e,t),this._bufferMap.forEach(n=>n.resize(e,t)),this._renderTargetCache.resize(e,t),this._effectList.forEach(n=>n.effect.resize(e,t))}dispose(){this._bufferMap.forEach(e=>e.dispose()),this._renderTargetCache.dispose(),this._effectList.forEach(e=>e.effect.dispose()),this._copyPass.dispose()}get $useMSAA(){return(this._externalMSAA!==null?this._externalMSAA:this.sceneMSAA)&&this._samplerNumber>1}get $cameraJitter(){return this._cameraJitter}}function Al(a,e){return a.order-e.order}function vl(a,e){return e.order-a.order}function hs(a){return a.isTexture?0:a.multipleSampling}Bs.prototype.setGeometryReplaceFunction=function(a){console.warn("EffectComposer.setGeometryReplaceFunction has been removed, use SceneBuffer.setGeometryReplaceFunction instead."),this._bufferMap.get("SceneBuffer").setGeometryReplaceFunction(a)};Object.defineProperties(Bs.prototype,{customRenderLayers:{set:function(a){console.error("EffectComposer.customRenderLayers has been removed, use SceneBuffer.renderLayers instead.")},get:function(){console.error("EffectComposer.customRenderLayers has been removed, use SceneBuffer.renderLayers instead.")}}});qt.prototype.dispose||(qt.prototype.dispose=function(){const a=this.renderQueueLayer.opaque[0];a&&(a.geometry.dispose(),a.material.dispose())});export{W as A,As as B,jt as C,ue as D,ut as E,pt as G,wt as M,ge as O,ys as P,We as Q,Vr as R,xl as S,yl as T,v as V,Ds as W,Jn as a,he as b,ee as c,Wt as d,ps as e,Ue as f,zt as g,wl as h,tr as i,O as j,rl as k,qt as l,Nl as m,Cl as n,en as o,Bs as p,Ll as q,vt as r,Ts as s,Rl as t,si as u,kr as v};
