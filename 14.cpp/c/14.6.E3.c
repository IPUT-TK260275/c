#include <stdio.h>

int main(void) {
    int minutes;

    scanf("%d", &minutes);
    printf("---\n%d\n%d\n", minutes / 60, minutes % 60);
    return 0;
}
