declare module 'draco3dgltf' {
  const draco3d: {
    createEncoderModule: (options?: any) => Promise<any>;
    createDecoderModule: (options?: any) => Promise<any>;
  };
  export default draco3d;
}
