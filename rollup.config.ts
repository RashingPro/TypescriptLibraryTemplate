import jsonPlugin from "@rollup/plugin-json";
import terserPlugin from "@rollup/plugin-terser";
import typescriptPlugin, { RollupTypescriptOptions } from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";
import { dts as dtsPlugin } from "rollup-plugin-dts";
import dtsMinifyPlugin from "rollup-plugin-dts-minify";

const outDir = "dist";

export default [
    {
        input: "src/index.ts",
        output: {
            dir: outDir,
            format: "es"
        },
        plugins: [
            typescriptPlugin({
                noEmitOnError: true,
                rootDir: "src"
            }),
            terserPlugin({
                keep_classnames: /^.*Error$/,
                compress: {}
            }),
            jsonPlugin()
        ]
    },
    {
        input: "src/index.ts",
        output: {
            dir: outDir,
            format: "es"
        },
        plugins: [
            dtsPlugin({
                compilerOptions: {
                    paths: {
                        "@/*": ["src/*"]
                    }
                }
            }),
            dtsMinifyPlugin()
        ]
    }
] as (RollupOptions & RollupTypescriptOptions)[];
