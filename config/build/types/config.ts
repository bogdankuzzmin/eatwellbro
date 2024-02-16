export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  build: string;
  entry: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  isDev: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port:  number;
}