

export default function() {
  // dummy data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Tom",
          amt: 140,
          transactionDt: "05-01-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 65,
          transactionDt: "05-21-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 84,
          transactionDt: "05-21-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 20,
          transactionDt: "06-01-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 95,
          transactionDt: "06-21-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 300,
          transactionDt: "07-01-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 5,
          transactionDt: "07-04-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 90,
          transactionDt: "07-03-2022"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 324,
          transactionDt: "07-21-2022"
        },
        {
          custid: 2,
          name: "Jerry",
          amt: 225,
          transactionDt: "05-01-2022"
        },
        {
          custid: 2,
          name: "Jerry",
          amt: 95,
          transactionDt: "05-21-2022"
        },
        {
          custid: 2,
          name: "Jerry",
          amt: 100,
          transactionDt: "06-01-2022"
        },
        {
          custid: 2,
          name: "Jerry",
          amt: 85,
          transactionDt: "06-21-2022"
        },
        {
          custid: 2,
          name: "Jerry",
          amt: 250,
          transactionDt: "07-01-2022"
        },
        {
          custid: 2,
          name: "Jerry",
          amt: 234,
          transactionDt: "07-21-2022"
        },
        {
          custid: 3,
          name: "Market Place",
          amt: 220,
          transactionDt: "06-21-2022"
        }
    ]
  );
};