CC     := gcc
CFLAGS := -Wall -Wextra -Werror -std=c11

BIN_DIR := bin
OBJ_DIR := obj

SRCS := $(wildcard *.c)
NAMES := $(SRCS:.c=)
OBJS := $(addprefix $(OBJ_DIR)/,$(SRCS:.c=.o))
TARGETS := $(addprefix $(BIN_DIR)/,$(NAMES))

all: $(TARGETS)

$(BIN_DIR):
	mkdir -p $(BIN_DIR)

$(OBJ_DIR):
	mkdir -p $(OBJ_DIR)

$(OBJ_DIR)/%.o: %.c | $(OBJ_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BIN_DIR)/%: $(OBJ_DIR)/%.o | $(BIN_DIR)
	$(CC) $(CFLAGS) $< -o $@

$(NAMES): %: $(BIN_DIR)/%
	@:

list:
	@echo "Available programs:"
	@printf "  %s\n" $(NAMES)

run:
	@if [ -z "$(FILE)" ]; then \
		echo "Usage: make run FILE=14.6.E1"; \
		exit 1; \
	fi
	@name="$(FILE)"; \
	name="$${name%.c}"; \
	$(MAKE) --no-print-directory "$$name" && \
	echo "----- Running $$name -----" && \
	"./$(BIN_DIR)/$$name"

test:
	bash test-samples.sh

clean:
	rm -rf $(OBJ_DIR)
	rm -f *.o

fclean: clean
	rm -rf $(BIN_DIR)
	rm -f $(NAMES)

re: fclean all

help:
	@echo "Commands:"
	@echo "  make                  Compile all .c files"
	@echo "  make 14.6.E1          Compile only 14.6.E1.c"
	@echo "  make run FILE=14.6.E1 Compile and run one program"
	@echo "  make test             Run all sample tests"
	@echo "  make list             Show available programs"
	@echo "  make clean            Remove object files"
	@echo "  make fclean           Remove objects and executables"
	@echo "  make re               Rebuild everything"

.PHONY: all clean fclean re list run test help $(NAMES)
