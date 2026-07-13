#include <stdio.h>

int main(void) {
    int absences;
    int late_arrivals;

    scanf("%d%d", &absences, &late_arrivals);
    printf("---\n%s\n", (absences + late_arrivals / 3 < 7) ? "true" : "false");
    return 0;
}
