# ============================================================
# Compiler settings
# ============================================================

CXX      := g++
CXXFLAGS := -Wall -Wextra -Werror -std=c++17


# ============================================================
# Directories
# ============================================================

BIN_DIR := bin
OBJ_DIR := obj


# ============================================================
# Source files
# ============================================================

SRCS := $(wildcard *.cpp)

# 14.6.E1.cpp -> 14.6.E1
NAMES := $(SRCS:.cpp=)

# 14.6.E1.cpp -> obj/14.6.E1.o
OBJS := $(addprefix $(OBJ_DIR)/,$(SRCS:.cpp=.o))

# 14.6.E1.cpp -> bin/14.6.E1
TARGETS := $(addprefix $(BIN_DIR)/,$(NAMES))


# ============================================================
# Default target
# ============================================================

all: $(TARGETS)


# ============================================================
# Directory creation
# ============================================================

$(BIN_DIR):
	mkdir -p $(BIN_DIR)

$(OBJ_DIR):
	mkdir -p $(OBJ_DIR)


# ============================================================
# Compilation
# ============================================================

# .cpp -> .o
$(OBJ_DIR)/%.o: %.cpp | $(OBJ_DIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

# .o -> executable
$(BIN_DIR)/%: $(OBJ_DIR)/%.o | $(BIN_DIR)
	$(CXX) $(CXXFLAGS) $< -o $@

# make 14.6.E1 でも作れる
$(NAMES): %: $(BIN_DIR)/%
	@:


# ============================================================
# Utility commands
# ============================================================

list:
	@echo "Available programs:"
	@printf "  %s\n" $(NAMES)

run:
	@if [ -z "$(FILE)" ]; then \
		echo "Usage: make run FILE=14.6.E1"; \
		exit 1; \
	fi
	@name="$(FILE)"; \
	name="$${name%.cpp}"; \
	$(MAKE) --no-print-directory "$$name" && \
	echo "----- Running $$name -----" && \
	"./$(BIN_DIR)/$$name"


# ============================================================
# Cleanup
# ============================================================

# .o ファイルだけ削除
clean:
	rm -rf $(OBJ_DIR)
	rm -f *.o

# .o と実行ファイルを削除
fclean: clean
	rm -rf $(BIN_DIR)
	rm -f main
	rm -f $(NAMES)

# 全削除して再コンパイル
re: fclean all


# ============================================================
# Help
# ============================================================

help:
	@echo "Commands:"
	@echo "  make                  Compile all .cpp files"
	@echo "  make 14.6.E1          Compile only 14.6.E1.cpp"
	@echo "  make run FILE=14.6.E1 Compile and run one program"
	@echo "  make list             Show available programs"
	@echo "  make clean            Remove object files"
	@echo "  make fclean           Remove objects and executables"
	@echo "  make re               Rebuild everything"


# ============================================================
# Phony targets
# ============================================================

.PHONY: all clean fclean re list run help $(NAMES)