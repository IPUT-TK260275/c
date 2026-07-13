#include <stdio.h>

int main(void) {
    int values[3];

    scanf("%d%d%d", &values[0], &values[1], &values[2]);
    for (int i = 0; i < 2; ++i) {
        for (int j = i + 1; j < 3; ++j) {
            if (values[i] > values[j]) {
                int temporary = values[i];
                values[i] = values[j];
                values[j] = temporary;
            }
        }
    }

    printf("---\n%d %d %d\n", values[0], values[1], values[2]);
    return 0;
}
