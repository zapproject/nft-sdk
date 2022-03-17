yarn ganache --hostname 0.0.0.0 &
sleep 10
npx yarn test
while true; do sleep 1; done
