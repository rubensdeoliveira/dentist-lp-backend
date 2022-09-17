export default ({ env }) => ({
  upload: {
      config: {
          provider: 'aws-s3',
          providerOptions: {
              accessKeyId: env('AKIATVQP5WDO3J36X7X3'),
              secretAccessKey: env('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'),
              region: env('us-east-1'),
              params: {
                  Bucket: env('strapi-aline-isis-s3'),
              },
          },
      },
  }
});