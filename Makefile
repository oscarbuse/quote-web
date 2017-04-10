build:
	docker build -t example/quote-web .
run:
	docker run -d -m 500m --rm --read-only --name quote-web -p 8081:8080 example/quote-web
stop:
	docker stop quote-web
clean:
	docker rm $$(docker ps -a -q); docker rmi $$(docker images | grep "^<none>" | awk "{print $$3}")
redo:	stop rm build run
all:	build run
