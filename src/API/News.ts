import axios, {errorHandler} from './config';

getTopHeadlines.abort = function (): void {};

export async function getTopHeadlines({q = '', country = 'us'}) {
  try {
    const controller = new AbortController();
    getTopHeadlines.abort = () => controller.abort();

    const response = await axios.get('/top-headlines', {
      params: {
        country,
        q,
      },
      signal: controller.signal,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    errorHandler(error.message);
  }
}
