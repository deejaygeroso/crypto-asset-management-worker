ssh -i "NodeJS.pem" ubuntu@ec2-18-216-182-83.us-east-2.compute.amazonaws.com
ec2-18-216-182-83.us-east-2.compute.amazonaws.com

sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
