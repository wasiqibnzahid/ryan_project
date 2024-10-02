import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface MakeApiParamsBase extends AxiosRequestConfig {
  method: "get" | "post" | "put" | "delete" | "patch" | "options";
  url: string;
}

interface WithResponseConfig extends MakeApiParamsBase {
  withResponse: true;
}

interface WithoutResponseConfig extends MakeApiParamsBase {
  withResponse?: never;
}

type MakeApiParams = WithResponseConfig | WithoutResponseConfig;

export function makeApiCall<T>(
  config: WithResponseConfig,
  fallbackData?: never
): Promise<AxiosResponse<T>>;
export function makeApiCall<T>(
  config: WithoutResponseConfig,
  fallbackData?: T
): Promise<T>;

// Adding fallback data since we don't have actual apis
export async function makeApiCall<T>(
  config: MakeApiParams,
  fallbackData?: T
): Promise<any> {
  if (fallbackData) return fallbackData;
  const res = await axios<T>(config);

  if (config.withResponse) {
    return res;
  } else {
    return res.data;
  }
}
